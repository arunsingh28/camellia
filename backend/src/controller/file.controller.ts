import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from "fastify";
import csv from "../utils/csv";
import { IStudents } from "../types/student";

class UploadController {
  async handleBulkUpload(req: FastifyRequest, res: FastifyReply) {
    const file = await req.file();
    const school_id = (file as any).fields?.school_id?.value;
    if (!file || !school_id) {
      return res
        .status(400)
        .send({ error: "No file uploaded or school id not provided" });
    }
    try {
      let students = await csv.parseCSV<IStudents>(file, res);
      students = students.map((student) => ({
        ...student,
        school_id,
      }));

      const validStudents = students.filter(
        (student) => student.student_addmission_number && student.school_id
      );
      if (validStudents.length === 0) {
        return res.status(400).send({ error: "No valid students found" });
      }

      const { mongoose } = req.server.mongo;
      const collection = mongoose.connection.collection("students");

      const filters = validStudents.map((student) => ({
        school_id: student.school_id,
        student_addmission_number: student.student_addmission_number,
      }));

      const existingStudents = await collection
        .find({ $or: filters })
        .project({ school_id: 1, student_addmission_number: 1, _id: 0 })
        .toArray();

      const existingSet = new Set(
        existingStudents.map(
          (student) =>
            `${student.school_id}-${student.student_addmission_number}`
        )
      );

      const toInsert = [];
      const duplicates = [];

      for (const student of validStudents) {
        const key = `${student.school_id}-${student.student_addmission_number}`;
        if (!existingSet.has(key)) {
          toInsert.push(student);
        } else {
          duplicates.push(student);
        }
      }

      if (toInsert.length > 0) {
        await collection.bulkWrite(
          toInsert.map((student) => ({
            replaceOne: {
              filter: {
                school_id: student.school_id,
                student_addmission_number: student.student_addmission_number,
              },
              replacement: {
                ...student,
                updatedAt: new Date(),
                createdAt: new Date(),
              },
              upsert: true,
            },
          })),
          { ordered: false }
        );
      }

      return res.status(200).send({
        message: "Upload processed",
        inserted: toInsert.length,
        duplicates: duplicates.length,
        duplicateRecords: duplicates,
        // mongoResult: result,
      });
    } catch (err) {
      throw err;
    }
  }

  async handleDownloadByClass(req: FastifyRequest, res: FastifyReply) {
    try {
      const { class_name } = req.params as { class_name: string };
      const { mongoose } = req.server.mongo;
      const studentsRecord = await mongoose.connection
        .collection<IStudents>("students")
        .find({ class: class_name.toString() })
        .toArray();
      if (!studentsRecord) {
        return res.status(404).send({ message: "No students found" });
      }
      const file = csv.createCSV(studentsRecord, class_name);
      res.header("Content-Type", "text/csv");
      res.header(
        "Content-Disposition",
        `attachment; filename="${class_name}.csv"`
      );
      return res.send(file);
    } catch (error) {
      throw error;
    }
  }
}

export default new UploadController();

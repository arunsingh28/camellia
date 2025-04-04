import { FastifyRequest, FastifyReply,HookHandlerDoneFunction } from "fastify";
import csv from "../utils/csv";
import { IStudents } from "../types/student";

class UploadController {
  async handleBulkUpload(req: FastifyRequest, res: FastifyReply) {
    const file = await req.file();
    if (!file) {
      return res.status(400).send({ error: "No file uploaded" });
    }
    try {
      const student = await csv.parseCSV<IStudents>(file, res);
      const { mongoose } = req.server.mongo;
      const students = await mongoose.connection
        .collection("students")
        .bulkWrite(
          student.map((student) => ({
            replaceOne: {
              upsert: true,
              filter: {
                school_id: (file as any).fields?.school_id?.value,
                student_addmission_number: student.student_addmission_number,
              },
              replacement: student,
              options: { ordered: false },
            },
          }))
        );
      return res.status(200).send({
        message: "File uploaded successfully",
        data: students,
      });
    } catch (err) {
      throw err
    }
  }

  async handleDownloadByClass(req: FastifyRequest, res: FastifyReply) {
    try {
      const { class_name } = req.params as { class_name: string };
      const { mongoose } = req.server.mongo;
      const studentsRecord = await mongoose.connection.collection<IStudents>("students").find({class: class_name.toString()}).toArray();
      if (!studentsRecord) {
        return res.status(404).send({ message: "No students found" });
      }
      const file = csv.createCSV(studentsRecord, class_name);
      res.header("Content-Type", "text/csv");
      res.header("Content-Disposition", `attachment; filename="${class_name}.csv"`);
      return res.send(file);
    } catch (error) {
      throw error
    }
  }

  
}

export default new UploadController();

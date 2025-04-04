import { FastifyRequest, FastifyReply } from "fastify";
import csv_parser from "../utils/csv_parser";
import { IStudents } from "../types/upload";

class UploadController {
  async handleBulkUpload(req: FastifyRequest, res: FastifyReply) {
    const file = await req.file();
    if (!file) {
      return res.status(400).send({ error: "No file uploaded" });
    }
    try {
      const student = await csv_parser.parseCSV<IStudents>(file, res);
      const { mongoose } = req.server.mongo;
      const students = await mongoose.connection
        .collection("students")
        .bulkWrite(
          student.map((student) => ({
            replaceOne: {
              upsert: true,
              filter: {
                student_registration_number:
                  student.student_registration_number,
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
      console.error("Error uploading file:", err);
      res.status(500).send({ error: "Error uploading file" });
    }
  }
}

export default new UploadController();

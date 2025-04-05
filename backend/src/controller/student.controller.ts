import { FastifyRequest, FastifyReply } from "fastify";

class StudentsController {
  async getAllStudents(req: FastifyRequest, res: FastifyReply) {
    try {
      const { current = 1, pageSize = 20 } = req.query as {
        current: number;
        pageSize: number;
      };
      const school_id = "1234";
      const { mongoose } = req.server.mongo;
      const collection = mongoose.connection.collection("students");
      const totalStudents = await collection.countDocuments({ school_id });
      const students = await collection
        .aggregate([
          { $match: { school_id } },
          { $skip: (+current - 1) * +pageSize },
          { $limit: +pageSize },
          { $addFields: { student_id: { $toString: "$_id" } } },
          { $unset: ["_id"] },
        ])
        .toArray();

      return res.status(200).send({
        code: 200,
        message: "success",
        data: students || [],
        pagination: {
          total: totalStudents,
          current: +current,
          page_size: +pageSize,
          has_more: totalStudents > +current * +pageSize,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new StudentsController();

import { FastifyInstance } from "fastify";

import studentController from "../controller/student.controller";

class StudentRouter{
    routes(fastify:FastifyInstance){
        fastify.get('/list', {schema: {
            querystring: {
                type: 'object',
                properties: {
                    current: { type: 'number', default: 1 },
                    pageSize: { type: 'number', default: 20 }
                }
            }
        }}, studentController.getAllStudents)
    }
}

export default new StudentRouter()
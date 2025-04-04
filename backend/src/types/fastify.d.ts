import 'fastify'
import type mongoose from 'mongoose'

declare module 'fastify' {
    interface FastifyInstance {
        mongo:{
            mongoose: typeof mongoose
            db: mongoose.Connection
        }
    }
}
import app from './app'

const port = process.env.PORT || 3000;

(async()=>{
    try {
        await app.listen({port: Number(port),host: '0.0.0.0'})
        app.log.info(`Server is running on port ${port}`)
    } catch (error) {
        app.log.fatal(error)
        process.exit(1)
    }
})()
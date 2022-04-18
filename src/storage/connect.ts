import mongoose from 'mongoose'
import config from '../config/config'
import logger from '../utils/logger'

async function connect() {
    const dbUri = config.dbUri
    try {
       
        await mongoose.connect(dbUri)
        logger
        logger.info("DB connected")
    } catch (error) {
        console.error("Could not connect")
        process.exit(1)
    }
}

export default connect;
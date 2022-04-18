import express, {Request,Response,Application} from 'express';
import morgan from 'morgan';
import config from './config/config';

import routes from './routes';
import connect from './storage/connect'
import logger from './utils/logger';

const app = express();

const PORT = config.port


app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}))

app.use(express.json())
// routes
//app.use("/api", routes)

// eroror

  app.listen(PORT, async () => {
    logger.info(`Server Running here 👉 https://localhost:${PORT}`)

    await connect()

    routes(app);
  });
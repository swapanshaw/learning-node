import {Express, Request, Response, Router} from "express";
import post from "./controller/api/post";
import { createUserhandler } from "./controller/user.controller";
import validate from "./middlewares/validator";
import { createUserSchema } from "./schema/user.schema";


//const router = express.Router();

function routes(app: Express) {
   app.get("/ping", (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.post("/user/create", validate(createUserSchema), createUserhandler)

    app.get("/posts/:id/:name",post.getALlPost)
}

export default routes;
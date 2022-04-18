import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../services/user.service";


export async function createUserhandler(req: Request, res: Response) {
    try{
        const user = await createUser(req.body)
        return res.send(user)
    }catch(e: any) {
        res.sendStatus(409).send(e.message)
    }
}
import { omit } from "lodash";
import userModel, { UserInput } from "../model/user.model";


export async function createUser(input: UserInput) {
    try{
        const user = await userModel.create(input)
        console.log(user)
        return omit(user.toJSON(),"password")
    } catch (e:any) {
        throw new Error(e)
    }
   
}
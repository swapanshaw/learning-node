import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import config from "../config/config";

export interface UserInput extends mongoose.Document {
    email: string;
    name: string;
    password: string;
  }

  
export interface UserDocument  extends UserInput{
    createdAt: Date
    updatedAt: Date
    comparePassword(candidatePass: string): Promise<boolean>
}

const userSchema = new mongoose.Schema(
    {
        email: {type: String, required: true, unique: true},
        name: {type: String, required: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true
    }
)

userSchema.pre("save",async function(next){
    let user = this as UserDocument

    if(!user.isModified("password")) {
        return next()
    }

    const salt = await bcrypt.genSalt(config.saltWorkFactor)
    const hash = await bcrypt.hashSync(user.password, salt)

    user.password = hash
    return next();
})

userSchema.methods.comparePassword = async function(candidatePass: string): Promise<boolean> {
    const user = this as UserDocument

    return bcrypt.compare(user.password, candidatePass).catch(e => false)
}

const userModel = mongoose.model("User", userSchema)

export default userModel
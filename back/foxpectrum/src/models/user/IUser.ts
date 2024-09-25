import { Schema, Types } from "mongoose";
import { IFamily } from "../family/IFamily";

export interface IUser {
    email: string;
    family: IFamily;
    password: string;
}

export const userSchema = new Schema<IUser>({
    email : {type : String, required : true },
    family : {type: Types.ObjectId, ref: 'Family', required : false},
    password : {type : String, required: true},
});

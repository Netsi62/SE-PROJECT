import jwt from "jsonwebtoken"
import User from "../Models/userModel.js";
import { Types } from "mongoose";
export default async (req,res)=>{
    const {authorization}=req.headers;
    if (!authorization){
       return  "A"
    }
    const token=authorization.split(' ')[1];
    
    /** 
     * here is the error
    */
    const {_id}= jwt.verify(token,process.env.KEY);
    const id =Types.ObjectId(_id)
   
    const user =await User.findOne({_id:id})
    return user ? user : "C"
}
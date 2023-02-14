

import mongoose from "mongoose";

import  Hotel from "../Models/hotelModel.js";



export const getAllHotels = async (req, res) => {
let location;
if(!req.query.city){
location={}
}
else{
    location =req.query.city
}
try {
    const auth = await authorizationChecker(req)
    
    if (auth === "A") {
        return res.status(401).json({ message: "token reqired" })
    }
    else if (auth === "C") {
        return res.status(401).json({ message: "not auth" })
    }
    const hotels =await Hotel.find({location})
    res.status(200).json({hotels}) 
} catch (error) {
    res.status(500).json({msg:error.message})
}




};
export const getHotel = async (req, res) => {
    try {
        const auth = await authorizationChecker(req)
    
        if (auth === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (auth === "C") {
            return res.status(401).json({ message: "not auth" })
        }
        const id =req.params.id
        const hotel =await Hotel.find({_id:id})
        if(!hotel){
            return res.status(404).json({msg:"No Hotel "})
        }
        res.status(200).json({data:hotel}) 
    } catch (error) {
        res.status(500).json({msg:error.message})
    }


};
export const addHotel = async (req, res) => {
    try {
        const auth = await authorizationChecker(req)
        if (auth === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (auth === "C") {
            return res.status(401).json({ message: "not auth" })
        }
        const hotel=await Hotel.create(req.body)
        res.status(200).json({success:true,data:hotel})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};
export const updateHotel = async (req, res ) => {
    try {
        const auth = await authorizationChecker(req)
        if (auth === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (auth === "C") {
            return res.status(401).json({ message: "not auth" })
        }
        const hotel=await Hotel.findOneAndUpdate({_id:req.params.id,},req.body,{new:true})
        if(!hotel){
            return res.status(404).json({msg:"No Hotel "})
        }
        res.status(200).json({success:true,data:hotel})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

};
export const deleteHotel = async (req, res) => {
    try {
        const auth = await authorizationChecker(req)
        
    
        if (auth === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (auth === "C") {
            return res.status(401).json({ message: "not auth" })
        }
        const hotel=await Hotel.findOneAndDelete({_id:req.params.id})
        res.status(200).json({data:hotel})
    }
        catch(error){
            res.status(500).json({msg:error.message}) 
        }

};

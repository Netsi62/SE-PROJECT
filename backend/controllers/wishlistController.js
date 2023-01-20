
import mongoose from "mongoose";

import Package from "../Models/packageModel.js";
import authorizationChecker from "./userController.js"
import wishList from "../Models/wishListModel.js";
import { ObjectId } from "mongoose";

export const getWishlist = async (req, res) => {
    try {
        const auth = await authorizationChecker(req)
    
        if (auth === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (auth === "C") {
            return res.status(401).json({ message: "not auth" })
        }
        
        const pkg_list=await wishList.find({user:auth.name}).select("packages")
        /**
         * here is the real problem, figuring out to query    !!!!
        */
        const wishlist_pkg=await Package.find({customID:{$in:pkg_list.packages}})//.select("name pricePerAdult location rating")
        console.log(wishlist_pkg)
        res.status(200).json({status:"success",data:wishlist_pkg})

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

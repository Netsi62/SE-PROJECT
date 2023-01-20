import express from "express";
import {getWishlist} from "../controllers/wishlistController.js"
const wishlistRouter = express.Router();
wishlistRouter.get("/",getWishlist)
export default wishlistRouter
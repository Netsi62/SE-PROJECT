
import express from "express";

// import controllers
import { getAllUsers, signup, login, addToWishlist, bookPackage, removeFromBookedPackages, removeFromWishlist} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/:id", addToWishlist);
userRouter.post("/:id", bookPackage);
userRouter.post("/:id", removeFromWishlist);
userRouter.post("/:id/unbook", removeFromBookedPackages);


export default userRouter;

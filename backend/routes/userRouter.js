
import express from "express";

// import controllers
import { signup, login} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.post("/signup", signup);
userRouter.post("/login", login);



export default userRouter;

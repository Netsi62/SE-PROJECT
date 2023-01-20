
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// all routers
import packageRouter from "./routes/packageRouter.js";
import hotelRouter from "./routes/hotelRouter.js";
import userRouter from "./routes/userRouter.js";
import agentRouter from "./routes/agentRouter.js";
import commentRouter from "./routes/commentRouter.js";
import bookingRouter from "./routes/bookingRouter.js";
import roomRouter from "./routes/roomRouter.js";
import  wishlistRouter  from "./routes/wishlistRouter.js";

const app = express();

// parse all data in json format
app.use(express.json());

// use routers
app.use("/api/v1/package", packageRouter);
app.use("/api/comment", commentRouter);
app.use("/api/user", userRouter);
app.use("/api/wishlist", wishlistRouter);




app.use("/api/hotel", hotelRouter);
app.use("/api/agent", agentRouter);
app.use("api/booking", bookingRouter);
app.use("api/room", roomRouter);

// username : touretdb
// passowrd: admin

mongoose.set('strictQuery', false);

async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Connected to database successfully`);
    } catch (error) {
        console.log(`this is an error message`);
        console.log(error.message);
    }
}


async function startServer() {
    try {
        app.listen(process.env.PORT, (error) => {
            console.log(error);
        });
        console.log((`Listening through port ${process.env.PORT}`));
    } catch (error) {
        console.log(error.message);
    }
}

connectToDb();
startServer();

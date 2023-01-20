
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// all routers
import packageRouter from "./routes/packageRouter";
import hotelRouter from "./routes/hotelRouter";
import userRouter from "./routes/userRouter";
import agentRouter from "./routes/agentRouter";
import commentRouter from "./routes/commentRouter";
import bookingRouter from "./routes/bookingRouter";
import roomRouter from "./routes/roomRouter";

const app = express();

// parse all data in json format
app.use(express.json());

// use routers
app.use("api/package", packageRouter);
app.use("api/hotel", hotelRouter);
app.use("api/user", userRouter);
app.use("api/agent", agentRouter);
app.use("api/comment", commentRouter);
app.use("api/booking", bookingRouter);
app.use("api/user", userRouter);
app.use("api/room", roomRouter);

// username : touretdb
// passowrd: admin

async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Connected to database successfully`);
    } catch (error) {
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

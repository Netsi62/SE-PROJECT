
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// all routers
import packageRouter from "./routes/packageRouter";
import hotelRouter from "./routes/hotelRouter";
import userRouter from "./routes/userRouter";


const app = express();

// parse all data in json format
app.use(express.json());

// use routers
app.use("api/package", packageRouter);
app.use("api/hotel", hotelRouter);
app.use("api/user", userRouter);


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
    } catch (error) {
        console.log((`Listening through port ${process.env.PORT}`));
    }
}

connectToDb();
startServer();

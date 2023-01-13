
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";


dotenv.config();


import cityRouter from "./routes/cityPackageRoutes.js";
import groupRouter from "./routes/groupPackageRoutes.js";
import packageRouter from "./routes/packageRouter.js";
import hotelRouter from "./routes/hotelRouter.js";


const app = express();

app.use(express.json());
// parse all data in json format

app.use("api/city", cityRouter);
app.use("api/groupPackage", groupRouter);
app.use("api/package", packageRouter);
app.use("api/hotel", hotelRouter);



mongoose.set('strictQuery', false);

mongoose
    .connect(process.env.MONGODBURL)
    .then((result) => {
        console.log(`Database Connected`);
    })
    .catch((err) => { console.log(err); });

app.listen(process.env.PORT, () => {
    console.log(`Listening through port ${process.env.PORT}`);
});

// username : touretdb
// passowrd: admin
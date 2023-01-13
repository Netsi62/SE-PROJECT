
import mongoose from "mongoose";


const Schema = mongoose.Schema;

const packageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    pricePerAdult: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
    }
})


export default mongoose.model("Package", packageSchema);

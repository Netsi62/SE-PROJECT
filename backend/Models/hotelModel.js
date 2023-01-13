import mongoose from "mongoose";


const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    stars : {
        type: Number,
        required:  true,
    },
    rooms: {
        type: Array,
        required: true,
    }
})


export default mongoose.model("Hotel", hotelSchema);

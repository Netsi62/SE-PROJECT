
import mongoose from "mongoose";


const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: false,
    }],

}, {
    timestamps: true
});
// 

export default mongoose.model("Hotel", hotelSchema);
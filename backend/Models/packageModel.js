
import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    pricePerAdult: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    departureDates:{
        type: Array,
        required: false,
    },
    image: {
        type: Image,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["City", "Group", "Holiday"]
    },
    agent:{
        // let's just store the name of the agent
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
});

export default mongoose.model("Package", packageSchema);

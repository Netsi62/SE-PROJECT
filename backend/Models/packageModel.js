
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
    rating: {
        type: Number,
        default: 0,
    },
    totalRatings: {
        type: Number,
        default: 0,
    },
    departureDates: {
        type: Array,
        required: false,
    },
    image: {
        type: String,     // We can Store just the url to the image.
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["City", "Group", "Holiday"]    // different types of packages.
    },
    agent: {
        // let's just store the reference to the agent
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agent",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    Comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
},
    {
        timestamps: true
    });


export default mongoose.model("Package", packageSchema);
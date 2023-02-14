
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
        type: String,
        // required: true
    },
    pricePerAdult: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        // required: true
    },
    rating: {
        type: Number,
        default: 0,
    },
    totalRatings: {
        type: Number,
        default: 0,
    },
    departureDates: [{
        type: Date
    }],
    image: [{
        type: String,     // We can Store just the url to the image.
    }],
    type: {
        type: String,
        // required: true,
        enum: ["City", "Group", "Other"]    // different types of packages.
    },
    to_do_type: {
        type: String,
        // required: true,
    },
    // agent: {
    //     // let's just store the reference to the agent
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Agent",
    //     required: true,
    // },

},
    {
        timestamps: true
    });


export default mongoose.model("Package", packageSchema);
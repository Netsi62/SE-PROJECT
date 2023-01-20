
import mongoose from "mongoose";


const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    totalRatings: {
        type: Number,
        default: 0,
    },
    images: [{
        type: String,
        required: true,
    }],
    rooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    }],
    availableRooms: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: true
});
// 

export default mongoose.model("Hotel", hotelSchema);

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
        required: true,
    }],
    availableRooms: [{
        type: Number,
        required : true,
    }],
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
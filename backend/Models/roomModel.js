
import mongoose from "mongoose";


const roomSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    roomNumber: {
        type: Number,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ['single', 'double',],
        required: true
    },
    description: {
        type: String,
    
    },
    images: [{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
        required: true
    },
},{
    timestamp: true,
});


module.exports = mongoose.model('Room', roomSchema);;
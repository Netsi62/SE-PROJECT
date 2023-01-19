

import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    roomNumber: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ['single', 'double', 'suite'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    amenities: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Room', roomSchema);;
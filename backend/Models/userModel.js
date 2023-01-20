
import mongoose from "mongoose";


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minlength: 5,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    bookedPackages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
    }],
    bookedHotels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    }],
    wishList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'wishList',
    }],
    Comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
},
    { timestamps: true }
);


export default mongoose.model("User", userSchema);

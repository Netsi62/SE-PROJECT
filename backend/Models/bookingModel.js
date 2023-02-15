
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    depDate: {
        type: Date,
        required: true
    },
    name:{
        type: String,
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    hotel:{
        type: mongoose.Schema.Types.ObjectId,
    },
    paymentMethod: {
        type: String,
        enum: ['telebirr', 'CBE'],   //....
    }
},{
    timestamps: true
});


export default mongoose.model('Booking', bookingSchema);

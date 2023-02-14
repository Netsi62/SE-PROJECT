
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
    numberOfPeople: {
        type: Number,
        required: true
    },
    price:{
        type: Number,
        default: 0,
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

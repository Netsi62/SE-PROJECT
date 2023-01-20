
import mongoose from 'mongoose';


const agentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        enum: ['admin', 'agent'],
    },
    phone: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    packageOffers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package'
    }],
    Comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true,
});


export default mongoose.model('Agent', agentSchema);

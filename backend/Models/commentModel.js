

import mongoose from 'mongoose';


const commentSchema = new mongoose.Schema({
    user: {
        type:String,
        ref: 'User',
        required: true
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default : 0
    },
    dislike: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
});


export default mongoose.model('Comment', commentSchema);;

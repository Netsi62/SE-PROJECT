

import mongoose from 'mongoose';


const wishlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    packages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});


export default model('Wishlist', wishlistSchema);

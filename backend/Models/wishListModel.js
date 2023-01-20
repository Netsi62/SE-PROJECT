

import mongoose from 'mongoose';


const wishlistSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    packages: [{
        type: Number,
        required: true
    }],
    
},
    { timestamp: true });


export default mongoose.model('Wishlist', wishlistSchema);

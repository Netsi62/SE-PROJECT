import mongoose from "mongoose";


const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    locationSrc : {
        type: String,
        required:  true,
    },
    photos: {
        type: Array,
        required:  true,
    }
})


export default mongoose.model("City", citySchema);

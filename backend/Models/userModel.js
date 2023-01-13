import mongoose from "mongoose";


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    password : {
        type: String,
        minlength: 5,
        required:  true,
    },
    email: {
        type: String,
        required:  true,
    }
})


export default mongoose.model("User", userSchema);

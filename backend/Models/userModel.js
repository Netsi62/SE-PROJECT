
import mongoose from "mongoose";



const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default:"user"
    }

},
    { timestamps: true }
);


export default mongoose.model("User", userSchema);

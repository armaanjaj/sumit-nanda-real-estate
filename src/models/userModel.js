import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password : {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: true,
    },
    forgotPassword: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyToken: Date,
})

export default mongoose.models.users || mongoose.model("users", userSchema);
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        unique: true,
    },
    comment: {
        type: String,
        required: [true, "Please provide a comment"],
        unique: false,
    },
    rating: {
        type: String,
        required: [true, "Please provide rating"],
        unique: false,
    }
})

const Review = mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

export default Review;
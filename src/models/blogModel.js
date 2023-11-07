import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        required: [true, "Please provide a date"],
    },
    dayOfWeek: {
        type: String,
        default: function() {
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return daysOfWeek[this.date.getDay()];
        },
    },
    title: {
        type: String,
        required: [true, "Please provide a title"],
        unique: true,
    },
    content: {
        type: String,
        required: [true, "Please provide the content"],
    },
    slug: {
        type: String,
        required: [true, "Please provide a link slug"],
        unique: true,
    },
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);

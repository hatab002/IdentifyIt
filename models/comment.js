const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: [true, "Comment text is required"],
    },
    upvoteCount: {
        type: Number,
        default: 0,
    },
    isCorrect: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

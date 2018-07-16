const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
    filename: {
        type: String,
        required: [true, "Image is required"],
    },
    solvedDate: Date,
    isSolved: {
        type: Boolean,
        default: false,
    },
    user: {type: Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
},
    { timestamps: true });

const Picture = mongoose.model("Picture", pictureSchema);

module.exports = Picture;

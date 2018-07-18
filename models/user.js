const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        validate: {
            validator: (email) => {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
            },
            message: "{VALUE} is not a valid email"
        },
        required: [true, "User email required"],
    },
    username: {
        type: String,
        minlength: [2, "Username must be at least 2 characters long"],
        maxlength: [20, "Username can't be more than 20 characters long"],
        required: [true, "Username is required"],
    },
    role: {
        type: String,
        enum: ["User", "Moderator"],
        default: "User",
    },
    pictures: [{ type: Schema.Types.ObjectId, ref: 'Picture' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
},
    { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;

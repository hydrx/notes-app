const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    entry: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entry",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Category", CategorySchema);
const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
    tag: {
        type: Array,
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

module.exports = mongoose.model("Tag", TagSchema);
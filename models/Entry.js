const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
    entry: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: false,
    },
    notepad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notepad",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Entry", EntrySchema);
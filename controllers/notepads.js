const Notepad = require("../models/Notepad");
const Entry = require("../models/Entry");

module.exports = {
    getNotepads: async (req, res) => {
        try {
            const notepads = await Notepad.find({user: req.user.id });
            res.render("notepads.ejs", {notepads: notepads, user: req.user });
        } catch (err) {
            console.log(err);
        }
    },
    getNotepad: async (req, res) => {
        try {
            const notepad = await Notepad.findById(req.params.id);
            const entries = await Entry.find({notepad: req.params.id}).sort({ createdAt: "asc" }).lean();
            res.render("notepad.ejs", { notepad: notepad, user: req.user, entries: entries });
        } catch (err) {
            console.log(err);
        }
    },
    createNotepad: async (req, res) => {
        try {
            await Notepad.create({
                title: req.body.title,
                user: req.user.id,
            });
            console.log("Notepad has been added!");
            res.redirect("/notepads");
        } catch (err) {
            console.log(err);
        }
    },
    editNotepad: async (req, res) => {
        try {
            // Update notepad title
            await Notepad.findOneAndUpdate({_id:req.params.id}, {title: req.body.title})
            console.log("Notepad has been edited!");
            res.redirect("/notepad/"+req.params.id);
        } catch (err) {
            console.log(err);
        }
    },
    deleteNotepad: async (req, res) => {
        try {
            // Find notepad by id
            // let notepad = await Notepad.findById({ _id: req.params.id });
            // Delete notepad from db
            await Notepad.remove({ _id: req.params.id });
            console.log("Deleted Notepad");
            res.redirect("/notepads");
        } catch (err) {
            res.redirect("/notepads");
        }
    },
};
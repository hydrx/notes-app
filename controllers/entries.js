const Entry = require("../models/Entry");
const Notepad = require("../models/Notepad");

module.exports = {
    createEntry: async (req, res) => {
        try {
            await Entry.create({
                entry: req.body.entry,
                category: req.body.category,
                notepad: req.params.id,
                timestamp: req.body.createdAt,
            });
            console.log("Entry has been added!");
            res.redirect("/notepad/"+req.params.id);
        } catch (err) {
            console.log(err);
        }
    },
    editEntry: async (req, res) => {
        try {
            // Find entry by id
            let entry = await Entry.findById({ _id: req.params.id });
            // Update entry and category
            await Entry.findOneAndUpdate({_id:req.params.id}, {entry: req.body.entry, category: req.body.category})
            console.log("Entry has been edited!");
            res.redirect("/notepad/"+entry.notepad);
        } catch (err) {
            console.log(err);
        }
    },
     deleteEntry: async (req, res) => {
      try {
        // Find entry by id
        let entry = await Entry.findById({ _id: req.params.id });
        // Delete entry from db
        await Entry.deleteOne({ _id: req.params.id });
        console.log("Deleted Entry");
        res.redirect("/notepad/"+entry.notepad);
      } catch (err) {
          console.log(err);
      }
    },
};
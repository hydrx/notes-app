const Tag = require("../models/Tag");
const Entry = require("../models/Entry");
const Notepad = require("../models/Notepad");

module.exports = {
    createTag: async (req, res) => {
        try {
            await Tag.create({
                tag: req.body.tag,
                timestamp: req.body.createdAt,
            });
            console.log("Tag has been added!");
            res.redirect("/notepad/"+req.params.id);
        } catch (err) {
            console.log(err);
        }
    },
    editTag: async (req, res) => {
        try {
            // Find entry by id
            let entry = await Entry.findById({ _id: req.params.id });
            // Update tags
            await Tag.findOneAndUpdate({_id:req.params.id}, {tag: req.body.tag})
            console.log("Tag has been edited!");
            res.redirect("/notepad/"+entry.notepad);
        } catch (err) {
            console.log(err);
        }
    },
     deleteTag: async (req, res) => {
      try {
        // Find entry by id
        let entry = await Entry.findById({ _id: req.params.id });
        // Delete entry from db
        await Tag.remove({ _id: req.params.id });
        console.log("Deleted Tag");
        res.redirect("/notepad/"+entry.notepad);
      } catch (err) {
          console.log(err);
      }
    },
};
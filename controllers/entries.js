const Entry = require("../models/Entry");

module.exports = {
    createEntry: async (req, res) => {
        try {
            await Entry.create({
                entry: req.body.entry,
                story: req.params.id,
            });
            console.log("Entry has been added!");
            res.redirect("/story/"+req.params.id);
        } catch (err) {
            console.log(err);
        }
    },
     deleteEntry: async (req, res) => {
      try {
        // Find story by id
        let entry = await Entry.findById({ _id: req.params.id });
        // Delete story from db
        await Entry.remove({ _id: req.params.id });
        console.log("Deleted Entry");
        res.redirect("/story/"+req.params.id);
      } catch (err) {
        res.redirect("/story/"+req.params.id);
      }
    },
};
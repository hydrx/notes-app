const Category = require("../models/Category");
const Entry = require("../models/Entry");
const Story = require("../models/Story");

module.exports = {
    createCategory: async (req, res) => {
        try {
            await Category.create({
                category: req.body.category,
                timestamp: req.body.createdAt,
            });
            console.log("Category has been added!");
            res.redirect("/story/"+req.params.id);
        } catch (err) {
            console.log(err);
        }
    },
    editCategory: async (req, res) => {
        try {
            // Find entry by id
            let entry = await Entry.findById({ _id: req.params.id });
            // Update story title
            await Category.findOneAndUpdate({_id:req.params.id}, {entry: req.body.category})
            console.log("Category has been edited!");
            res.redirect("/story/"+entry.story);
        } catch (err) {
            console.log(err);
        }
    },
     deleteCategory: async (req, res) => {
      try {
        // Find entry by id
        let entry = await Entry.findById({ _id: req.params.id });
        // Delete entry from db
        await Category.remove({ _id: req.params.id });
        console.log("Deleted Category");
        res.redirect("/story/"+entry.story);
      } catch (err) {
          console.log(err);
      }
    },
};
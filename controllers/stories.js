const Story = require("../models/Story");
const Entry = require("../models/Entry");

module.exports = {
    getStory: async (req, res) => {
        try {
            const story = await Story.findById(req.params.id);
            const entries = await Entry.find({story: req.params.id}).sort({ createdAt: "desc" }).lean();
            res.render("post.ejs", { story: story, user: req.user, entries: entries });
        } catch (err) {
            console.log(err);
        }
    },
    createStory: async (req, res) => {
        try {
            await Story.create({
                title: req.body.title,
                user: req.user.id,
            });
            console.log("Story has been added!");
            res.redirect("/stories");
        } catch (err) {
            console.log(err);
        }
    },
    deleteStory: async (req, res) => {
        try {
            // Find story by id
            let story = await Story.findById({ _id: req.params.id });
            // Delete story from db
            await Story.remove({ _id: req.params.id });
            console.log("Deleted Story");
            res.redirect("/stories");
        } catch (err) {
            res.redirect("/stories");
        }
    },
};
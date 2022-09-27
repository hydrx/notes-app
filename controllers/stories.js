const Story = require("../models/Story");
const Entry = require("../models/Entry");

module.exports = {
    getStories: async (req, res) => {
        try {
            const stories = await Story.find({user: req.user.id });
            res.render("stories.ejs", {stories: stories, user: req.user });
        } catch (err) {
            console.log(err);
        }
    },
    getStory: async (req, res) => {
        try {
            const story = await Story.findById(req.params.id);
            const entries = await Entry.find({story: req.params.id}).sort({ createdAt: "asc" }).lean();
            res.render("story.ejs", { story: story, user: req.user, entries: entries });
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
    editStory: async (req, res) => {
        try {
            // Update story title
            await Story.findByIdAndUpdate(req.params.id, {title: req.body.title})
            console.log("Story has been edited!");
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
const express = require("express");
const router = express.Router();
const storiesController = require("../controllers/stories");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Story Routes
router.get("/:id", ensureAuth, storiesController.getStory);

router.post("/createStory", storiesController.createStory);

router.put("/editStory/:id", storiesController.editStory);

router.delete("/deleteStory/:id", storiesController.deleteStory);

module.exports = router;
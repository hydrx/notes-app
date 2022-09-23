const express = require("express");
const router = express.Router();
const storiesController = require("../controllers/stories");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, storiesController.getStory);

router.post("/createStory", upload.single("file"), storiesController.createStory);

router.delete("/deleteStory/:id", storiesController.deleteStory);

module.exports = router;
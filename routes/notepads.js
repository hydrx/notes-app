const express = require("express");
const router = express.Router();
const notepadsController = require("../controllers/notepads");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Story Routes
router.get("/:id", ensureAuth, notepadsController.getNotepad);

router.post("/createNotepad", notepadsController.createNotepad);

router.put("/editNotepad/:id", notepadsController.editNotepad);

router.delete("/deleteNotepad/:id", notepadsController.deleteNotepad);

module.exports = router;
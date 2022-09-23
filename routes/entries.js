const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entries");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Entry Routes
router.post("/createEntry/:id",  entriesController.createEntry);

// router.delete("/deleteEntry/:id", entriesController.deleteEntry);

module.exports = router;
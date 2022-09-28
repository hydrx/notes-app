const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/tags");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Entry Routes
router.post("/createCategory/:id",  categoriesController.createTag);

router.put("/editCategory/:id",  categoriesController.editTag);

router.delete("/deleteCategory/:id", categoriesController.deleteTag);

module.exports = router;
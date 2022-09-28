const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Entry Routes
router.post("/createCategory/:id",  categoriesController.createCategory);

router.put("/editCategory/:id",  categoriesController.editCategory);

router.delete("/deleteCategory/:id", categoriesController.deleteCategory);

module.exports = router;
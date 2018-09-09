const express = require('express');
const router = express.Router();

const recipe_controller = require('../controllers/recipe.controller');

router.get("/", recipe_controller.test );
router.post("/create_recipe", recipe_controller.create_recipe);
router.post("/get_recipe", recipe_controller.get_recipe)

module.exports = router;
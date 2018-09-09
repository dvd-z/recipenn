const express = require('express');
const router = express.Router();

const recipe_controller = require('../controllers/recipe.controller');
const recipe_finder = require('../controllers/recipe_finder.controller');

router.get("/", recipe_controller.test);
router.post("/create_recipe", recipe_controller.create_recipe);
router.post("/get_recipe", recipe_controller.get_recipe);
router.get("/get_all_recipes", recipe_controller.get_all_recipes);
router.post("/find_possible_recipes", recipe_finder.find_possible_recipes);


module.exports = router;
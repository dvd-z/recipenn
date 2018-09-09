const Recipe = require('../models/recipe.model');
const Recipe_Controller = require('../controllers/recipe.controller');

exports.find_possible_recipes = function (req, res) {
    console.log(req.body.username);
    console.log("recipes", Recipe_Controller._get_all_recipes());
    res.send("food");
}


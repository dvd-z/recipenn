const Recipe = require('../models/recipe.model');
const Login = require('../controllers/login.controller');

exports.test = function(req, res){
    res.send('Greetings from the Test controller!');
}

exports.create_recipe= function(req, res){

    let recipe = new Recipe(
        {
            name: req.body.name,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            creator_username: req.body.creator_username
        }
    )
}


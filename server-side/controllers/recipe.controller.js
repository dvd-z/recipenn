const Recipe = require('../models/recipe.model');
const Login = require('../controllers/login.controller');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
}

exports.create_recipe = function (req, res) {

    // let post_verify= function(){
    console.log("body", req.body)
    ingredients = req.body.ingredients
    // let ingredients = JSON.parse(req.body.ingredients)
    let recipe = new Recipe(
        {
            name: req.body.name,
            ingredients: [ingredients],
            instructions: req.body.instructions,
            creator_username: req.body.creator_username
        }
    );
    recipe.save(function (err) {
        if (err) {
            res.send("error")
        }
        res.send("Recipe Created Successfully")
    })

    // }
    // Login.verify_user(req.body.name, req.body.password);

}

exports.get_recipe = function (req, res) {
    console.log(req.body);
    var query = Recipe.where({ name: req.body.name });
    query.findOne(function (err, recipe) {
        if (err) return handleError(err);
        if (recipe) {
            console.log(recipe);
            res.send(JSON.stringify(recipe));
        }
    });

}


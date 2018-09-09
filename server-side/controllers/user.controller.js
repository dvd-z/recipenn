const User = require("../models/user.model");

exports.create_user = function(req, res) {
    console.log(req.body)

    let user = new User({
        name: req.body.name,
        password: req.body.password,
        owned_ingredients: [],
        favorite_recipes: []
    });

    user.save(function(err){
        if(err){
            res.send("error, user may already exist");
        }
        res.send("User Created Successfully");
    });
}

exports.test = function(req,res){
    return res.send("Food is good for u")
}
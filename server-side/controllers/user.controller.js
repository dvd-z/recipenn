const User = require("../models/user.model");

//send name, password
exports.create_user = function (req, res) {
    console.log(req.body)

    let user = new User({
        name: req.body.name,
        password: req.body.password,
        owned_ingredients: [],
        favorite_recipes: []
    });

    user.save(function (err) {
        if (err) {
            console.log(err)
            res.send("error")

            return err;
        }
        res.send("User Created Successfully");
    });
}

//send username, password
exports.delete_user = function (req, res) {
    console.log(req.body);
    User.deleteOne({ name: req.body.username }, function (err) {
        if (err) return next(err);
        res.send("Deleted user successfully");
    });
}

//send username, password, ingredient
exports.add_ingredients = function (req, res) {
    var new_is = JSON.parse(req.body.ingredients);
    let callback = function (chosen_user) {
        if (!chosen_user) {
            res.send("Error");
            return;
        }
        new_is.forEach(function(new_i){
            chosen_user.owned_ingredients.push(new_i);
        })
        
        update_ingredients(chosen_user, chosen_user.owned_ingredients);
        res.send("added ingredient");
    }

    find_user(req.body.username, callback);
    
}

//send username, password, ingredient
exports.remove_ingredient = function (req, res) {
    var remove_i = req.body.ingredient;
    let callback = function (chosen_user) {
        if (!chosen_user) {
            res.send("Error");
            return;
        }
        if(chosen_user.owned_ingredients.indexOf(remove_i)==-1){
            res.send("Ingredient not owned");
        }
        chosen_user.owned_ingredients.splice(chosen_user.owned_ingredients.indexOf(remove_i), 1);
        removed = update_ingredients(chosen_user, chosen_user.owned_ingredients, res)
        res.send("removed ingredient")
    }
    find_user(req.body.username, callback);
    
}


function find_user(username, callback) {
    User.findOne({ name: username }, function (err, user) {
        if (err) {
            console.log(err)
            callback(null)
        } else {
            callback(user);
            return user
        }
    });
}

function update_ingredients(chosen_user, ingredients_update, res) {

    var query = { 'name': chosen_user.name };
    chosen_user.owned_ingredients = ingredients_update;
    console.log("chosen", chosen_user)
    User.findOneAndUpdate(query, chosen_user, { upsert: false }, function (err, doc) {
        if (err) {
            console.log(err);
        }
    });


}

//send username, password
exports.remove_all_ingredients = function (req, res) {
    let callback = function (chosen_user) {
        if (!chosen_user) {
            res.send("Error");
            return;
        }
        removed = update_ingredients(chosen_user, [], res)
        res.send("removed ingredient")
    }
    find_user(req.body.username, callback);
}


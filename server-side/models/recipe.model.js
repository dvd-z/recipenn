const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RecipeSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type: Array, required:true},
    instructions: {type: Array, required:true},
    creator_username: {type:String, required:true},
    creator_password: {type:String, required:true}
});

module.exports = mongoose.model("Recipe", RecipeSchema);

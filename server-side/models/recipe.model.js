const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RecipeSchema = new Schema({
    name: {type:String, required:true},
    ingredients: {type: Array, required:true}
});

module.exports = mongoose.model("Recipe", RecipeSchema);

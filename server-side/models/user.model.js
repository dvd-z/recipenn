const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type:String, required:true},
    owned_ingredients: {type: Array, required:true},
    favorite_recipes:{type: Array, required:true}
});

module.exports = mongoose.model("User", UserSchema);

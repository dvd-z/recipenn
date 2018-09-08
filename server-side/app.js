const express = require('express');
const bodyParser = require('body-parser');

const recipe = require('./routes/recipe.route')
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://master-user:PennApps18#@ds251022.mlab.com:51022/recipesdb'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error.'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/recipe', recipe);

let port = 8080;

app.listen(port, ()=>{
    console.log("Server is running at port: ", port);
})
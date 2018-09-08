const express = require('express');
const bodyParser = require('body-parser');

const recipe = require('./routes/recipe.route')
const app = express();

app.use('/recipe', recipe);

let port = 8080;

app.listen(port, ()=>{
    console.log("Server is running at port: ", port);
})
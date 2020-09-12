const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const app = express()
const PORT = 8080
const Recipe = require('./models/RecipeModel');
const db = mongoose.connection;
//Connect to cloud db
let db_conString = "mongodb+srv://lvl162:1622000@cluster0.gabg8.gcp.mongodb.net/CookyCooky?retryWrites=true&w=majority"
mongoose.connect(db_conString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log("Sucessfully connected!!"))

//afsadfasf


app.use('/api', (req, res) => {
    // res.json({ "mess": "Hello Would!" })
    // Recipe.findById('5f4cbf6f2b491f0fac503105', (err, recipe) => {
    //     if (err) { return res.json({ err }) }
    //     res.json({
    //         name: recipe.name,
    //         nguyen_lieu: recipe.ingredients
    //     })
    // })
    Recipe.findOne({ id: 2 }, (err, recipe) => {
        if (err) { return res.json({ err }) }
        res.json({
            name: recipe.name,
            nguyen_lieu: recipe.ingredients
        })
        console.log(recipe);
    })
})

app.use('/helloworld', (req, res) => {
    res.json({ "mess": "Hello World!" })
})

app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/mid.htm'));
});

app.listen(process.env.PORT || PORT, () => { console.log("Server started on http://localhost:" + PORT) })

module.exports = app


// const Recipe = require('./RecipeModel')
// const recipes = require('./temp.json')
// const importData = async (recipes) => {
//     try {
//         await Recipe.create(recipes)
//         console.log("Sucessfully imported.");
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// importData(recipes)
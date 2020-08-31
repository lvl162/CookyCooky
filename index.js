const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 8080
const Recipe = require('./RecipeModel');
const { Recoverable } = require('repl');
const db = mongoose.connection;
//Connect to cloud db
let db_conString = "mongodb+srv://lvl162:1622000@cluster0.gabg8.gcp.mongodb.net/CookyCooky?retryWrites=true&w=majority"
mongoose.connect(db_conString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log("Sucessfully connected!!"))



app.use('/', (req, res) => {
    // res.json({ "mess": "Hello Would!" })
    Recipe.findById('5f4cbf6f2b491f0fac503105', (err, recipe) => {
        if (err) { return res.json({ err }) }
        res.json({
            name: recipe.name,
            nguyen_lieu: recipe.ingredients
        })
    })
})

app.listen(PORT, () => { console.log("Server started on http://localhost:" + PORT) })




module.exports = app

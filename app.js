const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 8080
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
    res.json({ "mess": "Hello Would!" })
})

app.listen(PORT, () => { console.log("Server started on http://localhost:" + PORT) })

module.exports = app;

// const recipes = require('./recipes_2.json')
// import data to database
// const importData = async (recipes) => {
//     try {
//         await Recipe.create(recipes)
//         console.log("Sucessfully imported.");
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
//importData(recipes)
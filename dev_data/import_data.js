const recipes = require('./recipes_2.json');
const Recipe = require('../models/RecipeModel');
const express = require('express');
const mongoose = require('mongoose');

const db = mongoose.connection;
//Connect to cloud db
let db_conString = "mongodb+srv://lvl162:1622000@cluster0.gabg8.gcp.mongodb.net/CookyCooky?retryWrites=true&w=majority"
mongoose.connect(db_conString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log("Sucessfully connected!!"))

const importData = async () => {
    try {
        await Recipe.deleteMany();
        console.log("Sucessfully deleted data");
        await Recipe.create(recipes);
        console.log("Sucessfully imported data");
    } catch (err) {
        console.log(err);
    }
}

importData();
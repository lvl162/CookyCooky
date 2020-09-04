const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    "name": {
        "type": "String"
    },
    "description": {
        "type": "String"
    },
    "ingredients": {
        "type": "Object"
    },
    "cooking_steps": {
        "type": [
            "String"
        ]
    },
    "image": {
        "type": "String"
    },
    "ration": {
        "type": "String"
    },
    "likes": {
        "type": "Number"
    }
})
const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
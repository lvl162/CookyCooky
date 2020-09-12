const rc = require('./dev_data/recipes_2.json');
const fs = require('fs');
recipes = []

rc.forEach( (el, i) => {
    el["id"] = i;
    const temp = el;
    recipes.push(temp)
});

console.log(recipes[0]);

const jsonString = JSON.stringify(recipes)
fs.writeFile('recipes_2.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})
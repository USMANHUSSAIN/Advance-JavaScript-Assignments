
// A simple object
let myObj = {
    id: 1,
    name: 'Usman',
    discipline: 'Software Engineering',
}

/******************** Old way **************************/

/*
let convertedArrayKeys = [];

for(let key in myObj) {
    convertedArrayKeys.push(key);
}

console.log(convertedArrayKeys);
*/

/******************** New ES6+ way *********************/

let convertedArrayKeys = Object.keys(myObj);
console.log(convertedArrayKeys);

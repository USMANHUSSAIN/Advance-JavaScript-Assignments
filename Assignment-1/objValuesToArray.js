
// A simple object
let myObj = {
    id: 1,
    name: 'Usman',
    discipline: 'Software Engineering',
}

/******************** Old way **************************/

/*
let convertedArrayValues = [];

for(let key in myObj) {
    convertedArrayValues.push(myObj[key]);
}

console.log(convertedArrayValues);
*/

/******************** New ES6+ way *********************/

let convertedArrayValues = Object.values(myObj);
console.log(convertedArrayValues);
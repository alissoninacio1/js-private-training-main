const { text } = require('./base');
const regExp1 = /Jhon | Maria/gi;

// console.log(text);
// console.log(text.match(regExp1));

//without space between the names and '|'
console.log(text.replace(/John|Maria/gi, "Felipe"))

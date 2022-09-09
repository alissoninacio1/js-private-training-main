//FLAGS
// g - global - find all the ocurrences 
//i - insensitive case



//regex - between - '/  /'

// () group
// | or


//You must specify ./ as a path of root folder to import a local module.
const { text } = require('./base');
 
const regExp1 = /Jhon/gi;

//test() - testa para ver se existe - return true or false
// exp.test(string) - contrario do match que é string.match(exp)
//console.log(regExp1.test(text))



//console.log(regExp1.exec(text).index)





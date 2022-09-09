//La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.

//The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined.

//rest parameter (...) three dots


function sum (a, b, ...c) {
    let result = a + b;
  
    c.forEach(function(n) {
      result += n
    })
  
    return result
  }
  
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))
  

// expressed functions
const expressed = function () {
    console.log("Hello World")
  }
  expressed()
  
  //with just one line of code in the function body and without func paramaters
  const arrow = () => console.log("arrow syntax with one line of code")
  arrow()
  
  
  //with ONLY ONE parameter, we can remove parentheses.
  const parentheses = nome => console.log(`Hola ${nome}`)
  parentheses("Alisson")
  
  
  //IN ARROW FUNCTIONS THE RETURN IS IMPLICIT!!!
  
  const sum = (a, b) => a + b
  console.log(sum(2, 3))
  
  
  //arrow functions with arrays
  const arr = [1, 2, 3, 4, 5]
  
  arr.forEach( el => console.log(el * 2))
  
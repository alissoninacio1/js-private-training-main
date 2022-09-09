//for in loop - The JavaScript for in statement loops through the properties of an Object

const obj = {
    name:    "Alisson",
    surname: "Inacio",
    age:      35,
  }
  
  //to access 
  
  for( const prop in obj) {
    console.log(`${prop} : ${obj[prop]}`)
  }
  
  //space to view in terminal
  console.log()
  
  /** 
   * Do not use for in over an Array if the index order is important.
   * The index order is implementation-dependent, and array values may not be accessed in the order you expect.
   * It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
  */
  
  //for of loop - The JavaScript for of statement loops through the values of an iterable object.It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
  
  const person = "Valeria"
  
  for(const letra of person) {
    console.log(letra)
  }
  
  //space to view in terminal
  console.log()
  
  
  
  //The forEach() method calls a function (a callback function) once for each array element.
  const arr = [1, 2, 3, 4]
  
  function double (value) {
    console.log(value * 2)
  }
  
  arr.forEach(double)
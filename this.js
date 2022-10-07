//global context
console.log(this)
this.lugar = "global context"

function salute() {
  console.log(`${this.lugar}`)
}

saludar()



//------------------------------
//local context
const obj = {
  lugar: "Contexto Objeto"
}

//execute salute in a new context - object context passed by parameter, if we just call the salute() method, it'll take the global context and not the local associated. So, it preserves a scope/context. 
salute.call(obj)
salute.apply(obj)
//call and apply is almost the same, with small differences



// bind() - this ties a context
//remember - arrow function will assume a global context, for this reason we use a declared function
const person = {
  name:"Alisson",
  salute: function() {
    console.log(`Hello ${this.name}`)
  }
}

person.salute()


// const anotherPerson = {
//   salute: person.salute
// }
//anotherPerson.salute()
//this will return a message "hello undefined"

const anotherPerson = {
  salute: person.salute.bind(person)
}

person.salute()

//now the message is displayed, because the method is refferring to the the another (they're connected)
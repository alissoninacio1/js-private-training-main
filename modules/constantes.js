//export is the word used in exporting modules

export const PI = Math.PI;

export let name = "Alisson";


//this is made in a separate file
//Solo se exporta lo que se necesita, agregando la palabra export before the variable declaration
//ex.: export - if you want to eport something, use the keyword export. 


//declared function
//this default  means that a function or a constat is exported as default, 
export default function saludar() {
    console.log("Hello modules ES6")
}




//important!!!
// To export as default - let and const, I need to follow this syntax:

// let number = "dois"
// export default number


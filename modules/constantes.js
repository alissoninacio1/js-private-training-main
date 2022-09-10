//export is the word used in exporting modules

export const PI = Math.PI;

export let name = "Alisson";


//this is made in a separate file
//Solo se exporta lo que se necesita, agregando la palabra export before the variable declaration
//ex.: export - if you want to eport something, use the keyword export. 


//declared function
export default function saludar() {
    console.log("Hello modules ES6")
}

//this default  means that a function or a constat is exported as default, 


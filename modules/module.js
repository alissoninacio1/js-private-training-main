// {}  las llaves son para importar las cosas como si estuvieran en un objeto
//siempre se pone './'
//You must specify ./ as a path of root folder to import a local module.

import saludar, {PI, name} from "./constantes.js";
import {aritmetica} from "./aritimeticas.js";

console.log(PI);
console.log(name);

console.log(aritmetica.sumar(3,2),  aritmetica.restar(6,3))

//to avoid SyntaxError: Cannot use import statement outside a module
// you can type  in <script type="module"> </script> in HTML file
// to give support to old browsers, we can write in E5 standard and use the word 'nomodule'
//it is used without quotes and without the word "type", this file won't be exported. On Contrary,  will export all files

saludar() 
//I must have only ONE exportation as default for file

//all things that aren't exported as default needs be called by destructuration  - see the import declaratios above
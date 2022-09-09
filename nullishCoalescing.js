const saludar = function (nombre) { 
  console.log(`Hello ${nombre ?? "Unknown User"}`)
 }


 saludar() 

 saludar("Alisson")
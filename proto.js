//contructor function, where we assign methods to prototypes, no to the function itself
function Animal(nombre, genero) {

    this.nombre = nombre;
    this.genero = genero;
  }
  
  
  //why to use prototypes? For avoiding the repetition of methods in each object instance to save memory. The Syntax and the code below help us to see how the prototype property can be used to add constructor methods. 
  
  //Prototypes are the mechanism by which JavaScript objects inherit features from one another. Using prototypes can help us to add 
  
  //methods added to the function prototype
  Animal.prototype.sonar = function() {
    console.log("Sonando")
  }
  
  Animal.prototype.saludar = function () {
    console.log(`Hello, my name is ${this.nombre}`)
  }
  
  //prototypical heritage 
  function Perro(nombre, genero, size) {
    //La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.
    this.super = Animal;
    this.super(nombre, genero)
    this.size = size;
  }
  
  
  //Perro is inheriting from the animal
  Perro.prototype = new Animal()
  
  
  
  
  
  class Persona {        
    constructor(nombre){
       this.nombre = nombre;
    }
  
     //nao é necessario usar a palavra function aqui
     saludar() {
        return `hola ${this.nombre}!`;
    }
  }
  
  //and
  
  function Persona(nombre){
    this.nombre = nombre;
  }
  
  Persona.prototype.saludar = function (){
    return `hola ${this.nombre}!`;
  }
  
  
  
  // Na verdade, um padrão bastante comum para mais definições de objetos é definir as propriedades dentro do construtor e os métodos no protótipo. Isso torna o código mais fácil de ler, pois o construtor contém apenas as definições de propriedade e os métodos são divididos em blocos separados.
  
  // Quando você adiciona alguma função ou atributo ao prototype, esta função (ou atributo) fica disponível a todas as instâncias da classe (criadas com o new ). Quando você altera sem o prototype, somente o objeto em questão possui a função/atributo. As instâncias não o possuem. 
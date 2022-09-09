//static method -  method that can be called without instantiate a new object

//getters and setters methods - to indicate that these methods are getters and setters, we need to use the word get and set respectively, along the method name ex.: get getName(), set setName().


//getter - only return a value
//setter - only set a value and receive a parameter

//in JS, getter and setter methods have a behavior of properties, I mean, we cannot call them as we call functions, we call them as we call them as we call properties. This feature is only in JS - in Java, for example, we call them as functions. 

class Dog {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    get getName() {
      return this.name;
    }
  
    set setName(name) {
      this.name = name;
    }
  
  }
  
  const laila = new Dog("Laila", 10)
  laila.setName = "King"
  console.log(laila.getName)
  
  //remember that this is only a syntax sugar, JS is not OOP, Java, Python, Typescript, C# is....
  
  
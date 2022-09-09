const obj = {
    name:    "Alisson",
    surname: "Inacio",
    age:      35,
    presentation : function() {
      return this.name + " " + this.surname + ", " + this.age
    }
  }
  
  
  //If you access the fullName property, without (), it will return the function definition:
  console.log(obj.presentation())
  
  
  //in objects literals, we can rewrite the object using this form
  //values are assigned outside and before the object. 
  
  let nome = "Lali", surname = "Nacho", age = 26;
  
  const myObj = {
    nome,
    surname,
    age,
    presentation() {
      return this.nome + " " + this.surname + ", " + this.age
    }
  }
  
  console.log(myObj.presentation())
  
  
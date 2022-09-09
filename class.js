class Animal{
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  sound() {
    console.log("I make sounds because I'm alive")
  }

  salute() {
    console.log(`Hello my name is ${this.name}`)
  }
}

const casper = new Animal("casper", "male"),
      kira = new Animal("kira", "female")

// casper.sound()
// kira.salute()


class Dog extends Animal {

  constructor(name, gender, size) {
    super(name, gender)
    this.size = size //because this line is exclusive from this class
  }

  uau() {
    console.log("uau uau")
  }

  tamanho() {
    console.log(`my size is ${this.size}`)
  }
}

const kal = new Dog("kal", "male", "70cm")

kal.sound()
kal.salute()
kal.uau()
kal.tamanho()
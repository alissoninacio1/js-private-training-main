// (...) spread operator

//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [6, 7, 8, 9, 10];

const newArr = [...arrayOne, ...arrayTwo]

console.log(newArr)



//The spread operator is often used in combination with destructuring.
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

//We can use the spread operator with objects too.

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

console.log(myUpdatedVehicle)


/*Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow. */
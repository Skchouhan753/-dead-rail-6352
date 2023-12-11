// ## Problem 3 (function-to-function inheritance) :
Mammal2.prototype.makeSound = ()=>{
    return `Mammal2 is making sound.`;
  }
Mammal2.prototype.canEat = (name)=>{
    return `${name} can eat.`
  }
function Mammal2(has_skeliton,has_fur,blood_type) {
    let object={};
    object.has_skeliton = has_skeliton;
    object.has_fur = has_fur;
    object.blood_type = "A";
    Object.setPrototypeOf(object,Mammal2.prototype);
    return object;
}

// var exampleMammal = new Mammal2(true, true, "warm-blooded");

// //propertites
// console.log(exampleMammal.has_skeliton); // true
// console.log(exampleMammal.has_fur); // true
// console.log(exampleMammal.blood_type); // warm-blooded

// //methods
// console.log(exampleMammal.makeSound()); // Mammal2 is making sound.
// console.log(exampleMammal.canEat("Bobcat")); // Bobcat can eat.
createHuman.prototype.canSpeak = function() {
    return `${this.name} can speak.`;
  };
createHuman.prototype.canDream = function() {
    return `${this.name} can dream.`;
  };

function createHuman(has_skeliton, has_fur, blood_type, name, height, skintone,gender, hair_type) {
    let human = {};
    human.has_skeliton = has_skeliton;
    human.has_fur = has_fur;
    human.blood_type = blood_type;
    human.name = name;
    human.height = height;
    human.skintone = skintone;
    human.gender = gender;
    human.hair_type = hair_type;
    Object.setPrototypeOf(human,createHuman.prototype);
    return human;
}
Object.setPrototypeOf(createHuman.prototype,Mammal2.prototype);
// var exampleHuman = new createHuman(
//   true,
//   false,
//   "warm-blooded",
//   "Alice",
//   160,
//   "fair",
//   "female",
//   "straight"
// );

// // Propertites
// console.log(exampleHuman.has_skeliton); // true
// console.log(exampleHuman.has_fur); // false
// console.log(exampleHuman.blood_type); // warm-blooded

// // Methods
// console.log(exampleHuman.makeSound()); // Mammal2 is making sound.
// console.log(createHuman.canEat("Burger")); // Burger can eat.
// console.log(exampleHuman.canSpeak()); // Alice can speak.
// console.log(exampleHuman.canDream()); // Alice can dream.

// createEmployee factory function
createEmployee.prototype.handleTeam = function() {
    return `${this.name} can handle team.`;
  };
  createEmployee.prototype.doMarketing = function() {
    return `${this.name} is good at marketing.`;
  };
function createEmployee(has_skeliton, has_fur, blood_type, name, height, skintone,gender, hair_type,salary, position, experience) {
let emp = {};
    emp.has_skeliton = has_skeliton;
    emp.has_fur = has_fur;
    emp.blood_type = blood_type;
    emp.name = name;
    emp.height = height;
    emp.skintone = skintone;
    emp.gender = gender;
    emp.hair_type = hair_type;
    emp.salary = salary;
    emp.position = position;
    emp.experience = experience;
Object.setPrototypeOf(emp,createEmployee.prototype);
return emp;
}
Object.setPrototypeOf(createEmployee.prototype,createHuman.prototype);

// // Create an employee object
// const employee = new createEmployee(
//   true,
//   true,
//   "A",
//   "John",
//   180,
//   "Fair",
//   "Male",
//   "Straight",
//   50000,
//   "Manager",
//   "5 years"
// );

// // propertites

// console.log(employee.has_skeliton); // true
// console.log(employee.has_fur); // true
// console.log(employee.blood_type); // A
// console.log(employee.name); // John
// console.log(employee.height); // 180
// console.log(employee.skintone); // Fair
// console.log(employee.gender); // Male
// console.log(employee.hair_type); // Straight
// console.log(employee.salary); // 50000
// console.log(employee.position); // Manager
// console.log(employee.experience); // 5 years

// // methods
// console.log(employee.makeSound()); // Mammal2 is making sound.
// console.log(employee.canEat("John")); // John can eat.
// console.log(employee.canSpeak()); // John can speak.
// console.log(employee.canDream()); // John can dream.
// console.log(employee.handleTeam()); // John can handle team.
// console.log(employee.doMarketing()); // John is good at marketing.


// don't chnage below export statement
export { Mammal2, createEmployee, createHuman };

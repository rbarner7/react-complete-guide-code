// const myName = 'Max';
// console.log(myName);


// myName = 'Manu';
// console.log(myName)


// function printMyName(name) {
//   console.log(name);
// }

// printMyName();
// printMyName('M');


// can also be written as an arrow function as
// const printMyName = (name) => {
//   console.log(name);
// }

// printMyName('Max');


//if only passing one (and only works for cases of 1 param)
// parentheses can be removed
// const printMyName = name => {
//   console.log(name);
// }

// printMyName('Max');


// const printMyName = () => {
//   console.log('Max');
// }

// printMyName();


// const printMyName = (name, age) => {
//   console.log(name, age)
// }

// printMyName('Ryan', 27);

// if just returning without adding code, it is possible to
// remove brackets and return keyword
// const multiply = (number) => console.log(number * 2);

// multiply(4);


// if just one param, can remove parantheses as well
// const multiply = number => console.log(number * 2);

// multiply(2);


// Old
// class Human {
//   constructor() {
//     this.gender = 'male';
//   }

//   printGender() {
//     console.log(this.gender);
//   }
// }


// // Person inherits property gender and method printGender
// class Person extends Human {
//   constructor(){
//     super(); // MUST have if inheriting from a parent class; executes parent constructor to correctly initialize the parent class
//     this.name = 'Max';
//     this.gender = 'female'; // can reassign variables inherited from parent class
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();


// ES6 (Next-Gen) change JS above
class Human {
  gender = 'male'; // can remove constructor function and this.

  printGender = () => console.log(this.gender); // must still refer to gender w/this.
}

class Person extends Human {
  // can also remove constructor and super call here
  name = 'Max';
  gender = 'female';

  printMyName = () => console.log(this.name);
}

const person = new Person();
person.printMyName();
person.printGender();


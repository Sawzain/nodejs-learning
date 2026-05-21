// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", (name,id) => {
//     console.log(`data received with ${name} with ${id}`);
// });
// customEmitter.on("response", (name,id) => {
//     console.log(`some other logic with ${name} with ${id}`);
// });

// customEmitter.emit("response",'john',34);
// hello(wait);

// ............callback
// function hello(callback) {
//   console.log("hello");
//   callback();
// }
// function wait() {
//   console.log(wait);
// }
// function leave() {
//   console.log("leave");
// }
// function goodbye() {
//   console.log("goodbye");
// }
// sum(displayConsole, 1, 2);
// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }
// function displayConsole(result) {
//   console.log(result);
// }

// ................objects
// const user = {
//   name: "lama",
//   age: 20,
//   isAdmin: false,
// };
// console.log(user.name);
// console.log(user["age"]);
// console.log(user.isAdmin);

// Method and method calling

// const user={
//     name : 'ram',
//     age : 20,

//     // have to write either function (){} or () => {} random function name not allowed

//     greet : function(){
//         console.log('hello!')
//     },
//     shout: () => {

//         console.log('Very unprofessional!!')
//     }

// }

// user.greet();
// user.shout();

// ..................array
// const fruit = ["apple", "pineapple", "orange"];
// console.log(fruit[0]) ;
// console.log(fruit.length);
// console.log(fruit)
// fruit.push('banana')
// console.log(fruit)
// fruit.push('banana')
// console.log(fruit)
// fruit.pop()
// console.log(fruit)

// const nums =[1,2,3,4,5]
// nums.forEach((value) => {
//   console.log(value)
// }
// )


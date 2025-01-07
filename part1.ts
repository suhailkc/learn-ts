// https://www.youtube.com/watch?v=NNEU6g5H6QUs
// CONTENTS
// - Infer Types (Implicit Types)
// - Defining Types (Explicit Types)
// - Interface
// - Type
// - Union
// - Optional?
// - Functions
// - Named Types



// // Infer Types OR Implicit Types = ts automatic detect cheyyunna types
// let userName = 'Debug Media';
// userName = 3; // will get error: Type 'number' is not assignable to type 'string'


// // Defining Types OR Explicit Types = manual types
// let userName: string = 'Debug Media';
// let subscribers: number = 3000;
// let isSubscribed: boolean = true;
// let skills: string[] = ["js", "css", "ts"];
// let data: (string | number)[] = ["js", "css", 10];
// let userDetail: {name: string; age: number; salary: number} = {name: 'suhail', age: 30, salary: 10_00_00_000}

// userDetail.age = 31; // here we can only assign number. get error if give string



// // Interface
// interface Details {
//   name: string;
//   age: number;
//   salary: number;
//   getName: () => void;
// }

// let userDetail: Details = {
//   name: 'suhail',
//   age: 30,
//   salary: 1000000,
//   getName() {
//     console.log(this.name)
//   }
// }



// // Type
// type Details = {
//   name: string;
//   age: number;
//   salary: number;
//   getName: () => void;
// }

// let userDetail: Details = {
//   name: 'suhail',
//   age: 30,
//   salary: 1000000,
//   getName() {
//     console.log(this.name)
//   }
// }



// // Union using '|'.
// // Union is a type that allows a variable to hold values of multiple specified types
// type Details = {
//   name: string;
//   age: number | string; // now we can use number or string
//   salary: number;
//   getName: () => void;
// }
// // Here we can say that age is an 'union type'

// let userDetail: Details = {
//   name: 'suhail',
//   age: 30,
//   salary: 1000000,
//   getName() {
//     console.log(this.name)
//   }
// }

// let data: (string | number | boolean)[] = ["js", "css", 10, false];



// // Optional (properties, parameters)
// type Details = {
//   name: string;
//   age: number;
//   salary?: number; // '?' menas that salary is optional property
//   getName?: () => void; // '?' menas that getName is optional property
// }

// let userDetail: Details = {
//   name: 'suhail',
//   age: 30,
// }



// // FUNCTIONS
// type Details = {
//   name: string;
//   age: number;
//   salary: number;
// }

// let userDetail: Details = {
//   name: 'suhail',
//   age: 30,
//   salary: 1000000,
// }

// function getUserName(user: Details) { // <-- paramenter type added
//   return user.name;
// }
// getUserName(userDetail)


// // Another case. without interface/type. direct/inline type giving
// function getUserAge({name, age} : {name: string; age: number}) {
//   return age
// }
// getUserAge({name: 'suhail', age: 30})


// function myFunction(user: Details): string { // Function return type
//   return 'Hello World'
// }
// myFunction(userDetail);

// function myFunction2(user: Details): void { // void means this function returns nothing. it may only do some oprations.
//   console.log('Hi');
// }
// myFunction2(userDetail);



// // Named Types (custom type other than string, number, etc)
// type StatusType = "pending" | "completed" | "failed";

// let myStatus: string = "any string"; // any string can be accepted here
// let currentStatus: StatusType = "pending" // only defined type will be accepted


// type ToggleSwitchType = "on" | "off";
// let toggleSwitch: ToggleSwitchType; // now this variable only accept "on" or "off"
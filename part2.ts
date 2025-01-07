// https://www.youtube.com/watch?v=7EhP28N4lc4
// CONTENTS
// - Function overloading
// - Generics
// - Enums
// - as const
// - keyof / typeof
// - Utility Types
// - any/unknown/never/void




// Function Overloading
// Consider a function, that has not a fixed data type. means may have multiple data type.
function add(num1: number | string, num2: number | string): number | string {
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    return num1.toString() + num2.toString();
  }
  return num1 + num2;
}
add(2, 2); // 4
add('2', '2') // 22

// THIS is not good. FIX:
// even if we put 'any' type we can decide only take 'number' or 'string' types.
function add1(num1: number, num2: number): number;
function add1(num1: string, num2: string): string;

function add1(num1: any, num2: any): any { 
  // even if we put 'any' type we can decide only take 'number' or 'string' types. its done in above two lines.
  return num1 + num2;
}
add1(2, 2); // 4
add1('2', '2') // 22
// add1(2, '2') // this will get error. becoz we did not define function type with 'number' and 'string' as parameters
// add1([], []) // this will also get error





// Generics
// It's same working as Function Overloading.
// You can use generics in functions to infer types based on what you call your function with.
function getAge<T>(age: T): T { // 'T' means 'Type'. we can give any name like 'S' or 'SuhailType'
  return age;
}
getAge<number>(20);
getAge<string>('20');




// // Another usecase of Generics
// type UserDetail = {
//   name: string;
//   age: number;
// }
// type AdminDetail = {
//   firstName: string;
//   role: string;
// }

// const userDetail : UserDetail = {
//   name: 'suhail',
//   age: 20
// }
// const adminDetail: AdminDetail = {
//   firstName: 'aydin',
//   role: 'admin',
// }

// function getDetails<T>(details: T): T {
//   return details;
// }

// const userValue = getDetails<UserDetail>(userDetail)
// const adminValue = getDetails<AdminDetail>(adminDetail)

// console.log(userValue.name);
// console.log(adminValue.firstName);




// // Another Example (add/merge on type to another)
// type UserDetail = {
//   name: string;
//   age: number;
// }
// type AdminDetail = UserDetail & { // here we added types of UserDetail to Admin Detail
//   role: string;
// }

// const userDetail : UserDetail = {
//   name: 'suhail',
//   age: 20
// }
// const adminDetail: AdminDetail = {
//   name: 'aydin',
//   age: 50,
//   role: 'admin',
// }

// function getDetails<T>(details: T): T {
//   return details;
// }

// const userValue = getDetails<UserDetail>(userDetail)
// const adminValue = getDetails<AdminDetail>(adminDetail)

// console.log(userValue.name);
// console.log(adminValue.name);




// // Another Example (add/merge on interface to another)
// interface UserDetail {
//   name: string;
//   age: number;
// }
// interface AdminDetail extends UserDetail { // here we added interface of UserDetail to Admin Detail
//   role: string;
// }

// const userDetail : UserDetail = {
//   name: 'suhail',
//   age: 20
// }
// const adminDetail: AdminDetail = {
//   name: 'aydin',
//   age: 50,
//   role: 'admin',
// }

// function getDetails<T>(details: T): T {
//   return details;
// }

// const userValue = getDetails<UserDetail>(userDetail)
// const adminValue = getDetails<AdminDetail>(adminDetail)

// console.log(userValue.name);
// console.log(adminValue.name);




// // Enums (similar to Union type)
// // type StatusType = "pending" | "completed" | "failed";

// enum StatusType {
//   PENDING,    // 0
//   COMPLETED,  // 1
//   FAILED,     // 2
// }
// console.log(StatusType.FAILED); // Output: 2


// enum StatusTypeA {
//   PENDING = 2,  // 2
//   COMPLETED,    // 3
//   FAILED,       // 4
// }
// console.log(StatusType.FAILED); // Output: 4




// as const (make a variable const. means make a variable readonly)
let userName = 'suhail' as const;




// keyof typeof
const StatusType = {
  PENDING : 'pending',
  COMPLETED : 'completed',
  FAILED : 'failed',
}

function getStatus(orderID: string, status: keyof typeof StatusType) {
  console.log(orderID, '==', StatusType[status]);
}

getStatus('12345', "COMPLETED")





// Utility Types
// All utility types are generic types

type User = {
  name: string;
  age: number;
}

// 1. Readonly<T>
// Creates a type with all properties of T set as read-only
const userDetails1: Readonly<User> = { // 'Readonly' is a generic type used to make propertice readonly. <User> is a type passed to typescript generic type Readonly
  name: "suhail",
  age: 20,
}

// 2. Partial<T>
// Creates a type with all properties of T set as optional.
const userDetails2: Partial<User> = {
  // now 'name' and 'age' are optional
}

// 3. Required<T>
// Creates a type with all properties of T set as required (removes ?)
type User3 = {
  name: string;
  age?: number;
}
const userDetails3: Required<User3> = {
  name: 'suhail',
  age: 300,
}

// 4. Pick<T, K>
// Creates a type by picking a subset of properties K from T
type User4 = {
  name: string;
  age: number;
  salary: number;
}
const userDetails4: Pick<User4, 'name' | 'age'> = { // pick only name and age from User4
  name: 'suhail',
  age: 40,
}

// 5. Omit<T, K>
type User5 = {
  name: string;
  age: number;
  salary: number;
}
const userDetails5: Omit<User5, 'salary'> = { // pick everything except salary from User5
  name: 'suhail',
  age: 40,
}

// 6. Exclude<T, U>
// Excludes types from T that are assignable to U. Exclude used for Union Type
type StatusType6 = 'pending' | 'completed' | 'failed';
const status6: Exclude<StatusType6, 'pending'> = 'failed'

// 7. Record<K, T>

// type Food = {
//   KFC: string;
//   PIZZA: string;
//   CHICKEN: string
// } // Here we know the types. what if we do not know keys and types. eg: data from api. so we use Record<>

type Food = Record<string, string> // means key is string and value is string type. we can put any type for value if we don't know value type from api. means Record<string, any>
const food: Food = {
 // here go any key values. key must be string and value must be string as we defined.
}
"use strict";
// https://www.youtube.com/watch?v=7EhP28N4lc4
// https://www.youtube.com/watch?v=fPoO7WGtFHk
// CONTENTS
// - Function overloading
// - Generics
// - Enums
// - as const
// - keyof / typeof
// - Utility Types
// - Utility Types
// - any/unknown/never/void/null
// Function Overloading
// Consider a function, that has not a fixed data type. means may have multiple data type.
function add(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return num1.toString() + num2.toString();
    }
    return num1 + num2;
}
add(2, 2); // 4
add('2', '2'); // 22
function add1(num1, num2) {
    // even if we put 'any' type we can decide only take 'number' or 'string' types. its done in above two lines.
    return num1 + num2;
}
add1(2, 2); // 4
add1('2', '2'); // 22
// add1(2, '2') // this will get error. becoz we did not define function type with 'number' and 'string' as parameters
// add1([], []) // this will also get error
// Generics
// It's same working as Function Overloading.
// You can use generics in functions to infer types based on what you call your function with.
function getAge(age) {
    return age;
}
getAge(20);
getAge('20');
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
let userName = 'suhail';
// keyof typeof
const StatusType = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed',
};
function getStatus(orderID, status) {
    console.log(orderID, '==', StatusType[status]);
}
getStatus('12345', "COMPLETED");
// 1. Readonly<T>
// Creates a type with all properties of T set as read-only
const userDetails1 = {
    name: "suhail",
    age: 20,
};
// 2. Partial<T>
// Creates a type with all properties of T set as optional.
const userDetails2 = {
// now 'name' and 'age' are optional
};
const userDetails3 = {
    name: 'suhail',
    age: 300,
};
const userDetails4 = {
    name: 'suhail',
    age: 40,
};
const userDetails5 = {
    name: 'suhail',
    age: 40,
};
const status6 = 'failed';
const food = {
// here go any key values. key must be string and value must be string as we defined.
};
const foodd = {
    PIZZA: 'asdf',
    CHICKEN: {
        asdf: 'asdf'
    }
};
// any - any data type
let uname = 10;
// unknown
// we don't know what type it will be. eg: from api data.
let unknownData = 'suhail'; // data being fetched from API;
const unknownValue = unknownData; // it's called 'type casting'. means changing type 'unknown' to 'string'
// never - function that return nothing
function throwError(message) {
    throw new Error(message);
}
// void
function logMessage(message) {
    console.log(message);
}
// never and void are same i think.
// null
// consider an input fied. we get value only if user is entered. so nitially we set as null
let myUserName = null;
function getMyUserName() {
    if (myUserName) {
        return 'Got value';
    }
    else if (myUserName === null) {
        return 'No value';
    }
}

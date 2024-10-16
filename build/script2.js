"use strict";
// Defining variables with different types 
let namee = "John";
let age = 10;
let isStudent = true;
console.log(`Name:${namee}  Age:${age} IsStudent:${isStudent}`);
// program 2
let city = "Newyork"; // inferred as string
// program 3
// define various array using typescript
let numbers = [1, 2, 3, 4, 5];
let names = ["chinmay", "deshpande"];
console.log(`${numbers}`);
console.log(`${names}`);
// program 4
// tuple examples 
let person = ["chinmay", 1];
let phone = [7709192441, 9561317858];
// program 5
//  enum 
// roles - admin customer support manager developer
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// enum Roles {
//     Admin,
//     support,
//     customer
// }
// let chinmay:Roles = Roles.Admin
let favColor = Color.Blue;
//console.log(Color.Blue)
// program 6
//union type
let password = 123;
password = "ABCD";
// Program 7 
// convert types using type assertion
let somevalue = "this is unknow value";
let val = somevalue.length;
console.log(`String lenght: ${val}`);
// Program 8
// unknow - checked will happen for type  
// any - check will not happen
let fruit = true;
let fruit2 = "banana";
let fruit3 = fruit2;
// program 9
let nulvalue = null;
nulvalue = "chinmay";
let undefinedval;

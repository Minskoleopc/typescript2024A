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
let favColor = Color.Blue;
//console.log(Color.Blue)
// program 6
//union
let password = 123;
password = "ABCD";

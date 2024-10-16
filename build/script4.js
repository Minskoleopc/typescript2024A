"use strict";
// program 1
// simple function declaration and invocation
function greet2(name) {
    console.log(`hello , ${name}`);
}
greet2("Chinmay");
// program 2
//function with  type annoatations , parameter and 
// return type 
function add(a, b) {
    return a + b;
}
let q = add(12, 3);
console.log(q);
// program 3
// arrow and function expression
let addB = function (x, y) {
    return x + y;
};
addB(12, 4);
let addC = (x, y) => {
    return x + y;
};
addC(23, 4);
// program 4
function getTotal(...numbers) {
    return numbers.reduce(function (acc, el) {
        return acc + el;
    }, 0);
}
getTotal(2, 33, 44, 55, 66, 77);
// program 5
// default parameter
function greetUser(name = "Guest") {
    console.log(`Hello ${name}`);
}
greetUser("chinmay");
greetUser();
// program 6
// optional parameter
function showDetails(name, age) {
    if (age) {
        console.log(`${name} ${age}`);
    }
    else {
        console.log(` ${name}  has no age provided`);
    }
}
showDetails("chinmay");
showDetails("chinmay", 12);

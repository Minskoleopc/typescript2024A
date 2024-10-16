"use strict";
// interface
let amol = {
    name: "chinmay",
    age: 34,
};
let myCar = {
    model: "Audi Q4",
    year: 2023
};
let myCarB = {
    model: "Audi Q4",
    year: 2023,
    color: "red"
};
let mahabharat = {
    title: "mahabharat",
    author: "vyas"
};
//mahabharat.title = "mahabharat"
mahabharat.author = "P vyas";
let cal = {
    add: (a, b) => a + b,
    subtraction: (a, b) => a - b
};
cal.add(13, 4);
cal.subtraction(23, 4);
// arrow function
let greete = (name) => "Hello";
let gr = function (name) {
    return "hello";
};
gr("chinmay");
// interface Body {
//     data: {
//         id:number,
//         email:string
//         first_name:string
//         last_name:string
//         avatar:string
//     }
//     support: {
//         url:string ,
//         text: "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }

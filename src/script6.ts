// program 1
//interface
interface Person {
    name:string;
    age:number
}
let john:Person = {
    name:"chinmay",
    age:23
}
console.log(`Name: ${john.name} , Age: ${john.age}`)

// program 2
// Optional properties

interface Car {
    model:string;
    year:number;
    color?:string
}

let myCar2:Car = {
    model:"Q6",
    year:23,
    color:"red"
}

// program 3
// Read only properties 

interface Book {
    readonly title:string;
    author:string
}

let myBoo2:Book = {
    title:"alchemist",
    author:"Paul cohelo"
}
myBoo2.author = "Paul O cohelo"
//myBoo2.title = "Alchemish"

// Program 4

// let cal = {
//     add2,
//     sub2
// }


interface CalculatorB {
    add(a:number,b:number):number;
    subtraction(a:number,b:number):number
}

let calD:CalculatorB = {
    add:(a,b) => a+b,
    subtraction:(a,b) => a-b
}
calD.add(13,4)
calD.subtraction(23,4)


console.log(`Add :${calD.add(13,4)} `)
console.log(`Add :${calD.subtraction(13,4)} `)

// program 5

interface Animal {
    name:string
}

interface Dog extends Animal{
    breed:string
}

let rabbit:Animal = {
    name:"red rabbit"
}

let puppy:Dog = {
    name:"tuffy",
    breed:"basic"
}

interface accountOpen {
    name:string;
    age:number;
    address:string;
    adharNo:string
    panCard:string
}
interface loan extends accountOpen {
    type:string
}

let chinmay:loan = {
    name:"chinmay",
    age:23,
    address:"gardenia",
    adharNo:"123",
    panCard:"AWKPD4769P",
    type:"home"

}












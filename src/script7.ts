// //program 1
// class Person {
//     // properties
//     name:string;
//     age:number;

//     constructor(nm:string,ag:number){
//         this.name = nm
//         this.age = ag
//     }
    
//     displayName():void{
//         console.log(`My name is ${this.name} and Age is ${this.age}`)
//     }

// }
// let personA  = new Person("chinmay",12)
// personA.displayName()

// // program 2

// class Animal {
//     public species:string;
//     private sound:string;
//     constructor(species:string,sound:string){
//         this.species = species
//         this.sound = sound
//     }
//     public makeSound():void{
//         console.log(`${this.sound}`)
//     }

//     private getSound():string{
//         return `${this.sound}`
//     }

//     public CallPrivate():void{
//         this.getSound()
//     }

// }

//let tiger = new Animal("Cat","New")

// console.log(tiger.species)
// //console.log(tiger.sound) --- not accessible

// tiger.makeSound()
// //tiger.getSound()  ---- not accessible outside class

// tiger.CallPrivate()

// // public - property or method - can be accessed outside the class
// // private - property or method can not be accessed outside the class
// //(both private property and method can be accesses with public method
//     //of same class
// //)


// // program 3 

// class Car {
//     readonly brand:string ;
//     constructor(brand:string){
//         this.brand = brand
//     }
//     displayBrand():void{
//         console.log(`${this.brand}`)
//     }
// }

// let carA = new Car("toyoto")
// carA.displayBrand()

// // program 4 (inheritance) --- js 

// // object literal 
// // update property outside the class
// // using constructor 
// // get and set method 
// // get and set keyword 



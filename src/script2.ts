// Defining variables with different types 

let namee:string = "John";
let age:number = 10
let isStudent:boolean = true
console.log(`Name:${namee}  Age:${age} IsStudent:${isStudent}`)


// program 2
let city = "Newyork" // inferred as string

// program 3
// define various array using typescript
let numbers:number [] = [1,2,3,4,5];
let names:string [] = ["chinmay","deshpande"]
console.log(`${numbers}`)
console.log(`${names}`)


// program 4
// tuple examples 
let person:[string,number] = ["chinmay",1]
let phone:[number,number] = [7709192441,9561317858]


// program 5
//  enum 
// roles - admin customer support manager developer

enum Color {
    Red= 1,
    Green,
    Blue
}

// enum Roles {
//     Admin,
//     support,
//     customer
// }
// let chinmay:Roles = Roles.Admin

let favColor:Color = Color.Blue
//console.log(Color.Blue)

// program 6
//union type
let password:string|number = 123
password = "ABCD"

// Program 7 
// convert types using type assertion
let somevalue:unknown = "this is unknow value"
let val:number = (somevalue as string).length
console.log(`String lenght: ${val}`)

// Program 8
// unknow - checked will happen for type  
// any - check will not happen




let fruit:any = true
let fruit2:unknown = "banana"
let fruit3:string = fruit2 as string 

// program 9
let nulvalue:string |null = null
nulvalue ="chinmay"
let undefinedval:string | undefined
























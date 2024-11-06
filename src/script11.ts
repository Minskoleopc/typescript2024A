// Advanced types 

// Union types 
// program 1
function getLength(input:string|number){
    if(typeof input == "string"){
        return input.length
    }
    else {
        return input.toString().length
    }
}
getLength(1245)
getLength('1245')

// program 2
// Intersection type 
interface PersonB {
    name:string;
}
interface EmployeeB {
    employeeId:number
}
type EmployeePerson = PersonB & EmployeeB

let emp12:EmployeePerson = {
    name:"chinmay",
    employeeId:432
}
// program 3
// Type alais
type Point  = {x:number,y:number};
function printPoint(point:Point):void{
    console.log(`${point.x} ${point.y}`)
}
//printPoint({x:12,y:34})

// program 4
// Type assertion
let someValue:any = "hello world .."
let abc = (someValue as string).length
console.log(abc)

// program 5
// Literal types 
type Direction = "up"|"down"|"left"|"right"

function move(dir:Direction){
    console.log(dir)
}
move("up")

//move("forward")
// program 6
// Nullable types 
function greet(name:string|null):void{

    if(name){
        console.log("Hello , ${name}");
    }
    else {
        console.log("hello stranger...")
    }
}
greet("chimay")
greet(null)

// null,undefined 0 .8 > 3,""

//Generic type
function identity<T>(value:T):T{
    return value
}
console.log(identity<number>(43))
console.log(identity<string>("chinmay"))
console.log(identity<boolean>(true))

function getFirstElement<T>(arr:T[]):T|undefined{
    return arr[3];
}
getFirstElement<string>(["chinmay","sarika"])
getFirstElement<number>([1,22,44])
getFirstElement<boolean>([true,false])














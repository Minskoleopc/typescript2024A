// Generics

function identity<T>(value: T): T {
    return value
}

console.log(identity<string>("hello"))
console.log(identity<number>(12))

// program 2

function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse()
}
reverseArray([1, 2, 3, 4])
reverseArray(["chinmay", "sarika", "poorva", "mayuri"])

// program 3
interface KeyValue<K, V> {
    key: K,
    value: V
}
const kvp1: KeyValue<number, string> = { key: 12, value: "chinmay" }
const kvp2: KeyValue<number, number> = { key: 12, value: 12 }
const kvp3: KeyValue<string, number> = { key: "chinmay", value: 12 }
const kvp4: KeyValue<string, string> = { key: "fn", value: "chinmay" }


// program 4
// Generics with class 
class Container<T> {
    private value: T;
    constructor(value: T) {
        this.value = value
    }
    getValue(): T {
        return this.value;
    }

}
let stringG = new Container<string>("Hello")
let numberContainer = new Container<number>(12)


// program 5
//contraints with generics
function logLength<T extends {length:number}>(item:T):void{
    console.log(item.length)
}

logLength("Hello")
logLength([11,22,33,44,55])

//logLength(123)
////logLength(true)
////logLength({fn:"chinmay",ln:"deshpande"})


// program 6
function processData<T = string>(data:T){
    return data
}
processData<number>(42)
processData<boolean>(true)
processData("234")

// Keyof Generics 
function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key]
}

let info = {
    namee:"chinmay",
    lastname:"deshpande"
}

let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23
}

getProperty(info,"namee")
getProperty(info,"lastname")

getProperty(info3,"firstName")
getProperty(info3,"lastName")
getProperty(info3,"age")



// let info = {
//     name:"chinmay",
//     lastname:"deshpande"
// }

// let info2 = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }















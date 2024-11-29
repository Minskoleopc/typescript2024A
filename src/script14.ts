// log 

// // Class decorator
// function LogClass(target:Function){
//     console.log(`class decorator applied to : ${target.name}`)
// }

// @LogClass
// class Persona {
//     constructor(public name:string){

//     }
// }

// const aaa = new  Persona("chinmay")
//class decorator applied to Persona

//Method decorators
// function LogMethod(target:any, propertyKey:string, descriptor: PropertyDescriptor) {
//     // class prototype ---> Calculatore
//     // propertyKey --> add
//     // descriptor --> describes a method
//     let originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Method ${propertyKey} called with arguments:${args}`)
//         return originalMethod.apply(this, args);
//     }
// }
// class Calculatore {
//     @LogMethod
//     add(a: number, b: number): number {
//         return a + b
//     }
// }

// const cal = new Calculatore();
// console.log(cal.add(12, 4))


//  Property Decorator 

// function LogProperty(target:any , propertyKey:string){
//     console.log(`Property Decorator applied to :${propertyKey}`)
// }
// class Car {

//     @LogProperty
//     companyName:string
//     constructor(cm:string){
//         this.companyName = cm
//     }
// }
// const car = new Car("maruti")


// oops 
// property 
// outside the class 
// set and get method
// get and set keyword

function LogAccessor(target:any , propertyKey:string , descriptor:PropertyDescriptor){
    console.log(`${propertyKey} is called`)
}

class Product {
    private abc:string 
    constructor(ab:string){
        this.abc = ab
    }
    @LogAccessor
    get ValueAbc(){
        return this.abc
    }

    set ValueAbc(c:string){
        this.abc = c
    }


}

let gg = new Product("abc")
console.log(gg.ValueAbc)
gg.ValueAbc = "ad"








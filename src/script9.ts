// overloading 
class Printer {
    print(value:string):void;
    print(value:number):void;
    print(value:string|number){
        if(typeof value == "string"){
            console.log(`"Printing the text "${value}`)
        }
        else {
            console.log(`Printing number :${value}`)
        }
    }
}

let a = new Printer()
let b = a.print("Hello")
let c = a.print(34)


// overriding 
class Animal {
    makeSound():void{
        console.log("Some generic animal sound ....")
    }

}

class Dog extends Animal {
    makeSound():void {
        console.log("woof woof !")
    }
}
let an = new Animal()
an.makeSound()

let moti = new Dog()
moti.makeSound()


// ducktypting
// class ---- same method ----- polymorphism 
// same method name 

// abstract method
// only signature no body 

interface Fylable {
    fly():void
}


class Bird implements Fylable {
    fly():void {
        console.log("Bird if fying")   
    }
}

class Airplane implements Fylable {
    fly():void {
        console.log("Aeroplane is fying")   
    }
}

class Kite implements Fylable {
    fly():void {
        console.log("Kite is fying")   
    }
}

function startFlying(obj:Fylable){
    obj.fly()
}

let aa = new Airplane()
let bb = new Bird()
let kk = new Kite()


startFlying(aa)
startFlying(bb)
startFlying(kk)









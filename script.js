
// // function declaration 


// function add(x,y){
//     return x + y
// }
// let q1 = add(12,4)

// let addB = function(x:number,y:number):number{
//     return x + y
// }
// addB(12,4)

// let addC = (x:number,y:number):number=>{
//     return x + y
// }
// let c3 = addB(12,4)


function addition(x,y){
    console.log(x+y) // 16
}
addition(12,4)


function addition(...add){
    //[12,4,3,4,44,5,6,7,8,8,9,4,5,6,7]
    console.log(add)
    add.reduce(function(acc,el){
        return acc + el
    },0)
}
addition(12,4,3,4,44,5,6,7,8,8,9,4,5,6,7)
// program 1
// function fetData(url:string):Promise<string>{
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(url){
//                 resolve(`Date from ${url}`)
//             }
//             else {
//                 reject('URL not found')
//             }

//         },2000);
//     });
// }

// fetData("https://reqres.in")
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('finally block executed')
// })

// async await 

// async function fetchData(url:string):Promise<string>{
//     if(!url) throw new Error("URL is required")
//         return `Data from ${url}`
// }

// async function processRequest(){
//     try {
//         const arr = await fetchData("ttps://reqres.in")
//         console.log(arr)
//     }
//     catch (error){
//         console.log(error);
//     }
    
// }
// processRequest()

// program 2 re- writing 

// async function processRequest(){
//     try {
//         const arr = await fetchData("ttps://reqres.in")
//         console.log(arr)
//     }
//     catch (error){
//         console.log(error);
//     }
//     finally{
//         console.log("Operation completed")
//     }
    
// }
// processRequest()


// program 3

async function fetchData(url:string):Promise<string>{
    if(!url) throw new Error("URL is required")
        return `Data from ${url}`
}

// promise.all()
// promise.allSettled()
// promise.race()
// promise.any()

async function fetcAll(){

    let urls = [
        "https://www.facebook.com",
        "https://www.facebook2.com",
        "https://www.facebook3.com"
    ]
    let data = await Promise.all([
        // fetchData('https://www.facebook.com'),
        // fetchData('https://www.facebook2.com'),
        // fetchData('https://www.facebook3.com')

        urls.map(function(url){
            fetchData(url)
        })


    ])
    console.log(data)
}

// Promise.race()

// Promise.allSettled()

// Promise.any()



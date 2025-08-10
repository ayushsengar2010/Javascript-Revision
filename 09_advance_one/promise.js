// console.log("promises");

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Complete");
})

new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('Asyn Task 2');
        resolve()
    },2000)
}).then(function(){
    console.log('Task Repeat');
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error ){
            resolve({username :"Ayush", password:"12345"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then(function(){
    console.log(username);
    return user.username
})

console.log(username);

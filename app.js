        // Q no 1/////......
// let prom = new Promise(
//     function(resolve, reject)  {
//     let complete = false;
//     if(complete){
//         resolve("successful");
//     }
//     else{
//         reject("failed");
//     }
// })
// console.log(prom);

    //  Q no 2////....
// function prom(){
//     return new Promise (function(resolve,reject){
//         let complete= true;
//         setTimeout(() => {
//             if (complete){
//                 resolve("successful");
//             }
//             else{
//                 resolve("reject")
//             }  
//         }, 3000);
       
//      });
// }
    //  Q no 3///.....
// console.log(prom());
// prom(true).then((result)=> {
//     console.log(result);
// });
// prom(false).catch((error)=>{
//     console.log(error);
// });

    //  problem 1////....
// let prom = new Promise(
//     setTimeout(() => {
//         console.log("Timer Completed!");
//     }, 3000)
    
// );
// console.log(prom);


// let prom= new Promise (function(resolve,reject){
//         let complete= true;
//           if (complete){
//                 resolve(" greater than 10");
//             }
//             else{
//                 resolve("Less than 10")
//             }  
    
       
//      });
// console.log(prom);

//    problem3///....
// function chainPromise(num) {
//     return new Promise((resolve) => {
//         resolve(num);
//     })
// };
// chainPromise(10).then((num)=>{
//     return num += 5;
// })
// .then((sum)=>{
//     return sum * 2;
// }).then((result)=>{
//     console.log(`Result: ${result}`);
// })

       // problem 4///...
//    Q : //    write a promise that resolves with "It's Sunny!" and reject with "It's Raining! .
    //     User  a random number to simulate the weather condition (e.g. , resolve if Math.random() >0.5)
// function prom() {
//     return new Promise((resolve, reject) => {
//         if (Math.random()> 0.5) {
//             resolve("It's Sunny!")
//         }
//         else{
//             reject("It's Raining!")
//         }
//     })
// }
// console.log(prom());
// 




// A clousure is a function having access to the parent scope.It preserves the data from outside.

// A clousure is an inner function have an access to the outer function variables.

// It has 3 types of scopes:
// 1) Local Scope (inner scope)
// 2) Outer Scope
// 3) Global Scope
// let n =6;
// function outer() {
//     let l = 10;
//     function inner() {
//         let m = 5
//         console.log(m);
//         console.log(l);
//         console.log(n);

//     }
//     inner();
// }
// outer();

                //  async and await/////
// async function x() {
//     console.log(1);
//     console.log(2);
//      await console.log(3);
//     console.log(4);
//     console.log(5);
// }
// console.log(6);
// console.log(7);
// console.log(x());
// console.log(8);
// console.log(9);

prom.then()((num)=> {
    console.log();
})


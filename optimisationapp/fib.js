// const memofunc=(func)=>{
//     const cache={}
//     return (input)=>{
//         return cache[input]||(cache[input]=func(input))
//     }
// }

// const fib=memofunc((N)=>{
// if(N===0) return 0
// if(N===1)return 1

// return fib(N-1)+fib(N-2)
// })

// let y=fib(70)
// console.time("T1")
// console.log(y);
// console.timeEnd("T1")
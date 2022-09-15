//---TIMERS---

//JS has functions that allows us to realize actions after some time, or during 'x' number of times.

//setTimeOut() - this receive a callback(function), it means that all the code block inside the function will be executed after the time set, ONLY ONCE.

//time is in miliseconds, this is the 'timout'

console.log("start")
setTimeout(() => {
  console.log("This is executed ONLY ONCE")
} , 3000)



//if we want to execute 'X' times
setInterval(() => {
  console.log("this runs indefinitely every time interval")
}, 1000)


//to print a timer in browser - project, only execute this function

/* 
setInterval(() => {
   console.log(new Date().toLocaleTimeString())
 }, 1000) 
*/


//COUNTERPARTS

//to use them, we need to store the functions above in variables  - clearTimout, clearInterval

let timer = setTimeout(() => {
  console.log(new Date().toLocaleTimeString())
}, 1000)

clearTimeout(timer)
console.log("Ends of timeout")
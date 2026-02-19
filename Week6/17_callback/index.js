//1)Kopioi alla oleva koodi tiedostoon callback_example.js ja suorita se.
setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//Tee ohjelma käyttäen anonyymiä funktiota (anonymous function)
setTimeout(function(){
    console.log("This is inside the anonymous function");
}, 2000);

console.log("The application 2 is started");


//3)Tee ohjelma käyttäen nuolifunktiota (arrow function)
setTimeout(() => {
    console.log("This is inside the arrow function");
}, 2000);

console.log("The application 3 is started");
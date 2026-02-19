const prompt = require("prompt-sync")();


let word = prompt("Enter a word: ");

let reversed = word.split("").reverse().join("");

if (word === reversed) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is NOT a palindrome.");
}

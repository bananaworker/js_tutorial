let Phrase = require("muz-palindrome");

let string = prompt("Go ahead, enter a string for a palindrome check.");
let phrase = new Phrase(string)

if (phrase.palindrome()) {
  alert(`"${phrase.content} is a palinfrome! Now go outside."`)
} else {
  alert("That aint no gawd damn palindrome fool.. Now go outside")
}

alert(string);

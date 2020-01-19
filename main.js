let Phrase = require("muz-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  // let string = prompt("Go ahead, enter a string for a palindrome check.");
  let phrase = new Phrase(event.target.phrase.value)
  let palindromeResult = document.querySelector("#palindromeResult")

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = (`"<strong>${phrase.content}</strong>" is a palindrome!`)
  } else {
    palindromeResult.innerHTML = ("That aint no gawd damn palindrome fool.. Now go outside")
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function(event) {
      palindromeTester(event);
  });
});

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"muz-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

//Gives all strings a reverse capability
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
};

//Create a Phrase object
function Phrase (content) {
  this.content = content;

  // Returns processed content for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns letters only from string.
  this.letters = function letters() {
    const lettersRegex = /[a-z]/ig;
    return ((this.content).match(lettersRegex) || []).join("");
  }

  // Returns true for palindrome, false otherwise
  this.palindrome = function palindrome() {
    if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }

}

},{}]},{},[1]);

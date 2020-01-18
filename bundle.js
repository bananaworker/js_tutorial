(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("muz-palindrome");

let string = prompt("Go ahead, enter a string for a palindrome check.");
let phrase = new Phrase(string)

if (phrase.palindrome()) {
  alert(`"${phrase.content} is a palinfrome! Now go outside."`)
} else {
  alert("That aint no gawd damn palindrome fool.. Now go outside")
}

alert(string);

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
    let lettersRegex = /[a-z]/ig
    return ((this.content).match(lettersRegex) || []).join("");
  }

  // Returns true for palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

}

},{}]},{},[1]);

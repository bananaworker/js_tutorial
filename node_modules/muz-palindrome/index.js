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

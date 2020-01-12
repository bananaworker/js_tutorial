// Adds reverse functionality to Strings
String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

// Returns true if string is empty (or only white charecters), false otherwise
String.prototype.blank = function blank() {
  return !!this.match(/^\s*$/gm);
}

//Returns the last element of an Array
Array.prototype.last = function last() {
  return this[this.length - 1];
}

// Returns the last element of an Array using Slice
Array.prototype.lastUsingSlice = function lastUsingSlice () {
  return this.slice(-1)[0]
}

//Create a Phrase object
function Phrase (content) {
  this.content = content;

  // Returns processed content for palindrome testing
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true for palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
}

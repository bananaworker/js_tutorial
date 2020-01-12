let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL friendsly version of a string
//   For example. "North Dakota" -> "north-dakota"
function URLify(string) {
  return string.toLowerCase().split(/\s+/g).join("-")
}

// Create URLs: Imperative version
function imperativeURLs(elements) {
  let urls = [];
  elements.forEach(function(element) {
     urls.push(URLify(element));
  });
  return urls;
}
console.log(imperativeURLs(states));

// Create URLs: Funtional version
function functionalURLs(elements) {
  return elements.map(element => URLify(element));
}
console.log(functionalURLs(states));

// Singles: Imperative version
function imperativeSingles (elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/g).length === 1) {
      singles.push(element);
    }
  })
  return singles;
}
console.log(imperativeSingles(states));

// Singles: Functional version
function functionalSingles (elements) {
  return elements.filter(n => n.split(/\s+/g).length === 1 );
}
console.log(functionalSingles(states));

let numbers = [1,2,3,4,5,6,7,8,9,10];

// Sum: imperative version
function imperativeSum (elements) {
  total = 0;
  elements.forEach(function(n) {
    total += n;
  })
  return total;
}
console.log(imperativeSum(numbers));

// Sum: functional version
function functionalSum (elements) {
  return elements.reduce((total, n) => {
    return total += n;
  });
}
console.log(functionalSum(numbers));

// lengths : Imperative solution
function imperativeLengths (elements) {
  lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  })
  return lengths;
}
console.log(imperativeLengths(states));

//lengths : Functional solution
function functionalLengths (elements) {
  return elements.reduce((lengths, element) => {
              lengths[element] = element.length;
              return lengths;
            }, {})
}
console.log(functionalLengths(states));


//product: Imperative solutions
function imperativeProduct (elements) {
  let product = 1;
  elements.forEach(function(element) {
    product *= element;
  })
  return product;
}
console.log(imperativeProduct(numbers));

//product : Funtional solution
function functionalProduct (elements) {
  return elements.reduce((product, n) => product *= n);
}
console.log(functionalProduct(numbers));

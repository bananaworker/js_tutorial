const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

//a Map object of unique words
let uniques = new Map();

// an array of all the words
let words = sonnet.match(/[\w,']+/g);

//iterating through all the words
for (let i = 0; i < words.length; i++) {
  //give the current key being iterated a name
  let word = words[i]
  //give the current value being iterated a name
  let currentValue = uniques.get(word)

  if (currentValue) {
    //add one to it, since it exists
    uniques.set(word,currentValue + 1);
  } else {
    // give it a value, since it doesnt exist
    uniques.set(word,1);
  }
  console.log(uniques);
}

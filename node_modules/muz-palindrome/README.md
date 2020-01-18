# Phrase object (with palindrome detector)

Muz Ahmed is working on this sample NPM module created in Learn Enough JavaScript to Be Dangerous.

The module can be used as follows:

```bash
$ npm install --global muz-palindrome
$ vim test.js
let Phrase = require("muz-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```

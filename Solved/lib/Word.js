const Letter = require("./Letter");

// The Word class is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly
class Word {
  constructor(word) { //apple
    // word.split - splits word into array of letters
    // .map - instantiate a new `Letter` for each character and return an array
    // referred to with the instance variable, `letters`
    
    this.letters = word.split("").map(function(char) { // [Letter("a"),Letter("p"),Letter("p"),Letter("l"),Letter("e")]
    //['f','i','s','h'] (split fx)
      return new Letter(char);
      //[new Letter("f"),new Letter("i"),new Letter("s"),new Letter("h")] (map fx)
      // new Letter("f")
      // this.visible=false
      // this.char = "f"
      // .toString()
      // .getSolution()
      // .guess()

    });
  }

  getSolution() {
    return this.letters
      .map(function(letter) {
        // iterate over each letter
        return letter.getSolution(); // return the solution for each to form an array of solved letters
      })
      .join(""); // create a string from the array of solved letters
  }

  // setting `toString()` as a method lets us concatenate it like we would a string!
  toString() {
    return this.letters.join(" "); // see Letter.prototype.toString in Letter.js
  }

  guessLetter(char) {

    // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
    let foundLetter = false;
    this.letters.forEach(function(letter) { //[Letter("f"),Letter("i"),Letter("s"),Letter("h")]
      if (letter.guess(char)) {
        foundLetter = true;
      }

    });

    // Print the word guessed so far--because we set the method for toString,
    //  JavaScript will automatically concatenate this even if we don't call toString
    console.log("\n" + this + "\n");
    // return whether we found a letter
    return foundLetter;
  }

  // Returns true if all letters in the word have been guessed
  guessedCorrectly() {
    // The `every` method returns true if the callback function returns true for every element in the array
    return this.letters.every(function(letter) {
      return letter.visible;
    });
  }
}

module.exports = Word;
// TODO: Write code to define and export the Employee class
// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Employee {
    constructor(myname, myid, myemail) {
      // If a character is not a number or a letter, make it visible right away
      // Save the underlying character
        this.email=myemail;
        this.id=myid;
        this.name=myname; 
      //this.char = char;
    }
   
    // Returns either an underscore or the underlying character depending on `this.visible`
    //    because we call this function toString, when we call `this.letters.join` in
    //    Word.js, JavaScript automatically uses the value we return here
    getName() {
     
      return this.name;
    }
  
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }


    getRole() {
      return "Employee";
    }

  }
  
  module.exports = Employee;
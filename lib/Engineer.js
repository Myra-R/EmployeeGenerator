// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class
// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
var Employee= require("./Employee");

class Engineer extends Employee{
    constructor(myname, myid, myemail, mygithub) {

        super(myname, myid, myemail);
        this.github=mygithub;
    }
    getRole() {
      return "Engineer";
    }

    getGithub() {
        return this.github ;
    }
  
  }
  
  module.exports = Engineer;
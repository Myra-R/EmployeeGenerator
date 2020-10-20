// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee= require("./Employee");

class Intern extends Employee{
    constructor(myname, myid, myemail, myschool) {

        super(myname, myid, myemail);
        this.school=myschool;
    }
    getRole() {
      return "Intern";
    }

    getSchool() {
        return this.school ;
    }
  
  }
  
  module.exports = Intern;
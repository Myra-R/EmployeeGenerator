// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee= require("./Employee");

class Manager extends Employee{
    constructor(myname, myid, myemail, myofficenumber) {

        super(myname, myid, myemail);
        this.OfficeNumber=myofficenumber;
    }
    getRole() {
      return "Manager";
    }

    getOfficeNumber() {
        return !isNaN(this.OfficeNumber);
    }
  
  }
  
  module.exports = Manager;
const Employee = require("../lib/employee");

//creating a subclass of Employee for Manager
class Manager extends Employee{
    constructor(name, id, title, email, officeNumber) {
        //Access parent by using super
        super(name, id, title, email);

        if(officeNumber){
            this.officeNumber = officeNumber;
        }
        else{
            throw new Error('You are missing an office number.');
        }
        
        //Change role to Manager
        this.empRole = "Manager";   
    }
}

module.exports = Manager;
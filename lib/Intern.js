const Employee = require("../lib/employee");

//creating a subclass of Employee for Intern
class Intern extends Employee{
    constructor(name, id, title, email, school) {
        //Access parent by using super
        super(name, id, title, email);

        if(school){
            this.school = school;
        }
        else{
            throw new Error('You are missing a school.');
        }
        
        //Change role to Intern
        this.empRole = "Intern";   
    }

    getSchool() {
        return this.school;
      }
}

module.exports = Intern;
const Employee = require("../lib/employee");

//creating a subclass of Employee for Engineer
class Engineer extends Employee{
    constructor(name, id, title, email, github) {
        //Access parent by using super
        super(name, id, title, email);

        if(github){
            this.gitHub = github;
        }
        else{
            throw new Error('You are missing a gitHub username.');
        }
        
        //Change role to Engineer
        this.empRole = "Engineer";   
    }

    getGithub() {
        return this.gitHub;
      }
}

module.exports = Engineer;
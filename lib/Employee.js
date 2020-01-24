//Creating the Employee class
class Employee {
    constructor(name, id, title, email) {
        //Error handling if a name, id, or title isn't provided
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!id) {
            throw new Error("You are missing the id.");
        }
        if (!title) {
            throw new Error("You are missing the title.");
        }
        if(!email){
            throw new Error("You are missing the email.");
        }
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.empRole = 'Employee';
    }

    //Methods section
    getName(){
       return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.empRole;
    }
}

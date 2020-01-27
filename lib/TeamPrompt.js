class TeamPrompt {
    constructor() {
        this.name = { type: "input", message: "Enter Name:", name: "name" };
        this.id = { type: "input", message: "Enter Employee ID:", name: "empId" };
        this.title = { type: "input", message: "Enter Title:", name: "title" };
        this.email = { type: "input", message: "Enter Email:", name: "email" };
        this.managerOfficeNumber = { type: "input", message: "Enter Office Number:", name: "officeNumber" };
        this.manager = [this.name,this.id,this.title,this.email,this.officeNumber];
    }
}

module.exports = TeamPrompt;
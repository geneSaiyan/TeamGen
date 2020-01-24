const Employee = require("../lib/employee");

function employeeObject(employeeReturned) {
    return new Employee(employeeReturned.name, employeeReturned.id, employeeReturned.title, employeeReturned.email);
}

describe("Employee", () => {
    //Variables to represent a valid and invalid employee object returned
    const correctEmployee = { "name": "Test Employee", "id": 100, "title": "Test Title", "email": "test@email.test" };
    const incorrectEmployee = { "name": "", "id": "", "title": "", "email": "" };

    describe("Initialization", () => {
        it("should create an employee object with a name, id, title and email", () => {
            const empObj = employeeObject(correctEmployee);
            expect(empObj.name).toEqual(correctEmployee.name);
            expect(empObj.id).toEqual(correctEmployee.id);
            expect(empObj.title).toEqual(correctEmployee.title);
            expect(empObj.email).toEqual(correctEmployee.email);
        });

        it("should throw an error if a name is not provided", () => {
            //Return
            const emp = () => new Employee(incorrectEmployee.name, correctEmployee.id, correctEmployee.title, correctEmployee.email);
            const err = new Error("You are missing the name.");
            //Expect
            expect(emp).toThrowError(err);
        });

        it("should throw an error if a id is not provided", () => {
            //Return
            const emp = () => new Employee(correctEmployee.name, incorrectEmployee.id, correctEmployee.title, correctEmployee.email);
            const err = new Error("You are missing the id.");
            //Expect
            expect(emp).toThrowError(err);
        });

        it("should throw an error if a title is not provided", () => {
            //Return
            const emp = () => new Employee(correctEmployee.name, correctEmployee.id, incorrectEmployee.title, correctEmployee.email);
            const err = new Error("You are missing the title.");
            //Expect
            expect(emp).toThrowError(err);
        });

        it("should throw an error if a email address is not provided", () => {
            //Return
            const emp = () => new Employee(correctEmployee.name, correctEmployee.id, correctEmployee.title, incorrectEmployee.email);
            const err = new Error("You are missing the email");
            //Expect
            expect(emp).toThrowError(err);
        });
    });

    //Methods 
    describe("methods", () => {
        it("should return the name", () => {
            const emp = employeeObject(correctEmployee);
            expect(emp.getName()).toEqual(correctEmployee.name);
        });
        it("should return the ID", () => {
            const emp = employeeObject(correctEmployee);
            expect(emp.getID()).toEqual(correctEmployee.id);
        });
        it("should return the title", () => {
            const emp = employeeObject(correctEmployee);
            expect(emp.getTitle()).toEqual(correctEmployee.title);
        });
        it("should return the email", () => {
            const emp = employeeObject(correctEmployee);
            expect(emp.getEmail()).toEqual(correctEmployee.email);
        });
        it("should return the role", () => {
            const emp = employeeObject(correctEmployee);
            expect(emp.getRole()).toEqual("Employee");
        });
    });
});
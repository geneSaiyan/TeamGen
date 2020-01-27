const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

inquirer
    //Prompt user to enter a github username and favorite color
    .prompt([
        {
            type: "input",
            message: "Enter Manager Name:",
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter Manager ID:",
            name: "managerId"
        },
        {
            type: "input",
            message: "Enter Manager Title:",
            name: "managerTitle"
        },
        {
            type: "input",
            message: "Enter Manager Email:",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter Manager Office Number:",
            name: "managerOfficeNumber"
        },
        {
            type: "input",
            message: "How many team members?",
            name: "teamMemberCount"
        }
    ])
    .then(function (response) {
        console.log(response)
    })
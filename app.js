const inquirer = require("inquirer");
const TeamPrompt = require("./lib/TeamPrompt");
const Manager = require("./lib/Manager");

var teamPrompt = new TeamPrompt();


inquirer
    //Ask for manager info first
    .prompt(
        [getManager()
        ])
    .then(function (response) {
        console.log(response)
    })
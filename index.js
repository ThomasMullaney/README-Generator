const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkDown.js");


// write README file
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
// console.log(generateMarkdown());

function inputPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Give your project a title.",
            name: "Title",
        },
        {
            type: "input",
            message: "Describe your project.",
            name: "Description",
        },
        {
            type: "input",
            message: "List any installation instructions.",
            name: "Installation "
        },
        {
            type: "input",
            message: "Describe how your project should be utilized.",
            name: "Usage"
        },
        {
            type: "checkbox",
            name: "License",
            message: "Please choose a license.",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "None"
            ],

        },
        {
            type: "input",
            message: "Who created/contributed to the project?",
            name: "Contributing",
        },
        {
            type: "input",
            message: "Provide testing instructions.",
            name: "test",
        },
        {
            type: "input",
            message: "Enter your gitHub username",
            name: "gitHub Username"
        },
        {
            type: "input",
            message: "If users have a question, what email can they reach you on?",
            name: "email"
        }
    ])

};
// function to initialize program
async function init() {
    console.log("initialized!")
    try {
        const data = await inputPrompt();
        console.log(generateMarkdown(data))
        await writeFileAsync("generatedREADME.md", generateMarkdown(data));
        console.log("Readme file created!");
    } catch (err) {
        console.log(err);
    }
};

// function call to initialize program
init();
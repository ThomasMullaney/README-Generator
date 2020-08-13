const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
// console.log(generateMarkdown());

function inputPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            message: "give your project a title",
            name: "title",
        },
        {
            type: "input",
            message: "describe your project",
            name: "description",
        },
        {
            type: "list",
            message: "What license's do you want to have for the project?",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "None"
            ],
            name: "license"
        },
        {
            type: "input",
            message: "what programs do you need installed to successfully run your project?",
            name: "installation",
        },
        {
            type: "input",
            message: "What is the purpose/function of the project?",
            name: "usage",
        },
        {
            type: "input",
            message: "Who created/contributed to the project?",
            name: "contributing",
        },
        {
            type: "input",
            message: "Provide examples of your project and how to run them?",
            name: "test",
        },
        {
            type: "input",
            message: "what is your GitHub account?",
            name: "gitHub"
        },
        {
            type: "input",
            message: "If users have a question, what email can they reach you on?",
            name: "email"
        }
    ]) 
        //     .then(function (response) {
        //     if (response.License === "Apache") {
        //     response.badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        //     }
        //     if (response.License === "MIT") {
        //      response.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" 
        //     }
        //     if (response.License === "ISC") {
        //         response.badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
        //     }
        //     if (response.License === "None") {
        //         response.badge = {name: "None"}
        //     }
        
        // });
    };
            // function to initialize program
            async function init() {
                console.log("initialized!")
                const data = await inputPrompt();
                console.log(data)

                try {
                    console.log(generateMarkdown(data))
                    await writeFileAsync("generatedREADME.md", generateMarkdown(data));
                    console.log("Readme file created!");

                } catch (err) {
                    console.log(err);
                }
            };

            // function call to initialize program
            init();

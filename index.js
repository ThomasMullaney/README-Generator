const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
console.log(generateMarkdown());

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
      type: "input",
      message: "What license's do you have?",
      name: "license",
    },
    {
      type: "input",
      message: "what is the license of your project?",
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
  ]);
}


// function to initialize program
async function init() {
    console.log("initialized!")
    
   

    try {
        const data = await inputPrompt();
        const generate = generateMarkdown(data)
        console.log(generateMarkdown(data))
        await writeFileAsync("generatedREADME.md", generate);
        console.log("Readme file created!");

    } catch (err) {
        console.log(err);
    }
};

// function call to initialize program
init();

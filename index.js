const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name : "title",
        message : "What is the title of your project?",
    },
    // {
    //     type: "input",
    //     name : "description",
    //     message : "Provide a short description of your project?",
    // },
    // {
    //     type: "input",
    //     name : "installation",
    //     message : "How can users install your project?",
    // },
    // {
    //     type: "input",
    //     name: "usage",
    //     message: "Provide instructions for the usage of your project",
    //   },
    //   {
    //     type: "list",
    //     name: "license",
    //     message: "Choose a license",
    //     choices: ["MIT", "GNU", "Boost", "Apache", "ISC", "Mozilla"],
    //   },
    //   {
    //     type : "input",
    //     name : "contribute",
    //     message: "How can others contribute to your project?",
    //   },
    //   {
    //     type: "input",
    //     name : "tests",
    //     message: "Describe any tests for your project"
    //   },
      {
        type: "input",
        name: "github",
        message: "What is your Github username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log("ReadMe.md successfully generated")
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers)=>{
      console.log(answers)
      
        const markdown = generateMarkdown(answers);
        writeToFile("ReadMe.md", markdown);
       

    })
}

// function call to initialize program
init();

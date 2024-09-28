// TODO: Include packages needed for this application
// const fs = require('fs'); 
import fs from 'fs';
// const inquirer = require('inquirer');
import inquirer from 'inquirer';


// TODO: Create an array of questions for user input
// Source: My brain
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: "What is the title of this project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a description of this project.",
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: "What are the installation instructions for this project?",
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: "What is the usage information for this project?",
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: "What are the contribution guidelines for this project?",
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: "What are the test instructions for this project?",
    },
    {
        type: 'list',
        name: 'license',
        message: "What license would you like to use for this project?",
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: "Enter your GitHub username:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email address:",
    }
];

// console.log(questions); Used to test if questions array was created correctly

// TODO: Create a function to write README file
// Source: Xpert Learning Assistant
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('README file has been successfully created!');
    });
}

// TODO: Create a function to initialize app
// Source: Xpert Learning Assistant
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const readmeContent = `
            # ${ data.projectTitle }
            ## Description
            ${ data.projectDescription }
            ## Installation Instructions
            ${ data.installationInstructions }
            ## Usage Information
            ${ data.usageInformation }
            ## Contribution Guidelines
            ${ data.contributionGuidelines }
            ## Test Instructions
            ${ data.testInstructions }
            ## License
            ${ data.license }
            ## GitHub Username
            ${ data.githubUsername }
            ## Email Address
            ${ data.email }
            `;
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error with inquirer:', error);
        });
}

// Function call to initialize app
init();

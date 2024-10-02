// Packages needed for this application
// CommonJS - did not use
// const fs = require('fs'); 
// const inquirer = require('inquirer');

// Used ESM for this project
import fs from 'fs';
import inquirer from 'inquirer';


// Aray of questions for user input
// Source: Challenge 7 criteria + my brain
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

// Function to write README file
// Source: Xpert Learning Assistant + my brain
function writeToFile(projectTitle, data) {
    const fileName = `${projectTitle.replace(/\s+/g, '_').toLowerCase()}_README.md`;
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log(`README file has been successfully created: ${fileName}`);
    });
}

// Function to initialize app
// Source: Xpert Learning Assistant + my brain
function init() {
    inquirer.prompt(questions)
        .then((data) => {

            // License badges mapped to corresponding URLs
            // Source: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
            const licenseBadges = {
                MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                Apache: '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                BSD: '[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
                None: ''
            };

            // License confirmation mapped to corresponding license
            // Source: My brain
            const licenseConfirmation = {
                MIT: 'This project is licensed under the MIT license.',
                Apache: 'This project is licensed under the Apache license.',
                GPL: 'This project is licensed under the GPL license.',
                BSD: 'This project is licensed under the BSD license.',
                None: 'This project is not licensed.'
            };

            const licenseBadge = licenseBadges[data.license];
            const confirmationMessage = licenseConfirmation[data.license];

            const readmeContent = 
`
# ${data.projectTitle} 
${licenseBadge}

## Table of Contents

- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Questions](#questions)

## Description

${data.description}

## Installation Instructions

${data.installationInstructions}

## Usage Information

${data.usageInformation}

## Contribution Guidelines

${data.contributionGuidelines}

## Test Instructions

${data.testInstructions}

## License

${data.license}
${licenseBadge}
${confirmationMessage}

## Questions

Check out my [GitHub profile](https://github.com/${data.githubUsername}) 
If you have any questions, you can reach me at: ${data.email}
`;

            writeToFile(data.projectTitle, readmeContent);
        })
        .catch((error) => {
            console.error('Error with inquirer:', error);
        });
}

// Function call to initialize app
init();

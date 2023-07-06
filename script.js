const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
  {
  type: 'input',
  name: 'fileName',
  message: 'What do you want to call this readme?',
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}
 

// Function to generate the markdown content
function generateMarkdown(data) {
  const { title, description, installation, usage, contributing, tests, license, github, email } = data;

  // Generate the content for the README file using the user's answers
  return `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Contributing
${contributing}

## Tests
${tests}

## Questions
For any questions or concerns, please reach out to me via [GitHub](https://github.com/${github}) or email me at ${email}.
`;
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const { fileName } = answers; 
    // Destructure the fileName from the answers object
    const readmeContent = generateMarkdown(answers);
    writeToFile(`${fileName}`, readmeContent);
  });
}

// Function call to initialize app
init();


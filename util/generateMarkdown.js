// Function to return the license badge based on the license selection
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
}

// Function to return the license link based on the license selection
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3-Clause') {
    return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
This application is covered under the ${renderLicenseLink(license)} license. Click the badge above to learn more about the license.`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.licenses)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

  ## Credits
  ${data.name}
`;
}
module.exports = generateMarkdown;

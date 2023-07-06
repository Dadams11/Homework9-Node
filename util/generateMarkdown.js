// Function to return the license badge based on the license selection
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// Function to return the license link based on the license selection
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
This application is covered under the ${renderLicenseLink(license)} license.`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, license } = data;

  // Generate the content for the README file using the user's answers
  const licenseBadge = renderLicenseBadge(license);

  return `# ${title}

${licenseBadge}

## Description
${description}

${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;

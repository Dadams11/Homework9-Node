// Function to return a license badge based on the license selection

// Function to return a license badge based on the license selection
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
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
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'BSD 3-Clause') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
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
This application is covered under the [${license}](${renderLicenseLink(license)}) license.`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, license } = data;

  // Generate the content for the README file using the user's answers
  return `# ${title} ${renderLicenseBadge(license)}

## Description
${description}

${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;

// Function to return the license link based on the license selection
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'BSD 3-Clause') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
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
This application is covered under the [${license}](${renderLicenseLink(license)}) license.`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, license } = data;

  // Generate the content for the README file using the user's answers
  return `# ${title} ${renderLicenseBadge(license)}

## Description
${description}

${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;

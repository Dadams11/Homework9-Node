// Function to return the license badge based on the license selection
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '<a href="https://opensource.org/licenses/MIT"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>';
  } else if (license === 'Apache 2.0') {
    return '<a href="https://opensource.org/licenses/Apache-2.0"><img alt="License: Apache 2.0" src="https://img.shields.io/badge/License-Apache_2.0-blue.svg"></a>';
  } else if (license === 'GPL 3.0') {
    return '<a href="https://www.gnu.org/licenses/gpl-3.0"><img alt="License: GPL v3" src="https://img.shields.io/badge/License-GPLv3-blue.svg"></a>';
  } else if (license === 'BSD 3-Clause') {
    return '<a href="https://opensource.org/licenses/BSD-3-Clause"><img alt="License: BSD 3-Clause" src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"></a>';
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
  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${title}

${licenseBadge}

## Description
${description}

${licenseSection}
`;
}

module.exports = generateMarkdown;

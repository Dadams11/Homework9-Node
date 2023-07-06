// Function to return the license badge based on the license selection
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  };

  return licenseBadges[license] || '';
}

// Function to return the license link based on the license selection
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause': '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)',
  };

  return licenseLinks[license] || '';
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  return `## License
This application is covered under the ${renderLicenseLink(license)} license.`;
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

// Function to return the license badge based on the license selection
function renderLicenseBadge(license) {
  const badges = {
    MIT: '<img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">',
    'Apache 2.0': '<img alt="License: Apache 2.0" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg">',
    'GPL 3.0': '<img alt="License: GPL v3" src="https://img.shields.io/badge/License-GPLv3-blue.svg">',
    'BSD 3-Clause': '<img alt="License: BSD 3-Clause" src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg">',
  };

  return badges[license] || '';
}

// Function to return the license link based on the license selection
function renderLicenseLink(license) {
  const links = {
    MIT: 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
  };

  return links[license] || '';
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
This application is covered under the <a href="${renderLicenseLink(license)}">${license}</a> license.`;
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

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contribute](#contribute)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Installation
  ${data.installation}
  ##Usage
  ${data.usage}
  ##License
  ${data.license} license.
  ##Contribute
  ${data.contribute}
  ##Tests
  ${data.tests}

  ## Questions
  If you have any questions, you can contact me through my Github (https://github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;


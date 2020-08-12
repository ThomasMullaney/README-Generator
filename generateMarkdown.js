
// function to generate markdown for README
function generateMarkdown(data) {
return `## ${data.title}
[![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)
# Table of Contents
 
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Description:${data.description}
## License:${data.license}
## Installation: ${data.installation}
## Usage:${data.usage}
## Contributing:${data.contributing}
## Testing:${data.test}
`
};


module.exports = generateMarkdown;

const fs = require('fs');

const projectName = 'My Awesome Project';
const projectDescription = 'This project is awesome and does amazing things!';
const prerequisites = ['Node.js and npm installed on your machine', 'An understanding of JavaScript'];

const installationSteps = [
  'Clone the repository to your local machine.',
  'Navigate to the root directory of the project in your terminal.',
  'Run the following command to install the required Node packages:',
  'npm install',
];

const configurationSteps = [
  'Create a `.env` file in the root directory of the project.',
  'Add the following variables to the `.env` file, replacing the values with your own:',
  'DATABASE_URL=your-database-url',
  'API_KEY=your-api-key',
];

const usageInstructions = [
  'To run the project, use the following command:',
  'npm start',
];

const readmeContent = `# ${projectName}

${projectDescription}

## Prerequisites
- ${prerequisites.join('\n- ')}

## Installation
${installationSteps.map(step => `- ${step}`).join('\n')}

## Configuration
${configurationSteps.map(step => `- ${step}`).join('\n')}

## Usage
${usageInstructions.map(instruction => `- ${instruction}`).join('\n')}

`;

fs.writeFile('README.md', readmeContent, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('README file created successfully!');
});

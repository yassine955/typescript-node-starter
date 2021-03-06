#!/usr/bin/env node
const inquirer = require('inquirer');
const ncp = require('ncp');
ncp.limit = 16;
(async () => {
  await inquirer
    .prompt([
      {
        type: 'checkbox',
        message: 'Choose your framework:',
        name: 'framework',
        choices: ['REACT', 'REACT-NATIVE', 'NODE']
      }
    ])
    .then(({ framework }) => {
      const cwd = process.cwd();
      const currentDIR = __dirname;
      const frame = framework[0];
      const msg = `Successfully installed ${frame} ✅`;
      const dirToGo = `${cwd}/`;
      if (frame === 'REACT') {
        ncp(`${currentDIR}/typescript-template-react/`, dirToGo, err => {
          if (err) return console.error(err);
          console.log(msg);
        });
      } else if (frame === 'REACT-NATIVE') {
        ncp(`${currentDIR}/typescript-template-react-native/`, dirToGo, err => {
          if (err) return console.error(err);
          console.log(msg);
        });
      } else if (frame === 'NODE') {
        ncp(`${currentDIR}/typescript-template-node/`, dirToGo, err => {
          if (err) return console.error(err);
          console.log(msg);
        });
      } else {
        console.log(`Please don't do that m8 ❌`);
      }
    });
})();

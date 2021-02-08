// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

// this is what they gave me but I think it is supposed to be the one below  const util = require('util');
const generateMarkdown = require(utils/generateMarkdown.js);
// they gave this to me. const { AsyncLocalStorage } = require('async_hooks');


const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
    ];

      // TODO: Create a function to write README file
function writeToFile ('README.md', generateMarkdown) {
    return fs.writeFileSync(path.join(process.cwd() 'README.md'), data)
    
//fs.writeToFile('README.md, generateMarkdown)
}
   

    
    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions)//.then promise function
        //call the function writetoFile using the data that we pass (ie the inquirer responses)
    }
    //      try {
    //          const answers = await questions();
    //          const readME = readMe(answers);

    //          await writeFileAsync('README.md', generateMarkdown);
    //          console.log('Sucessful, please find your new README file in the utils folder.');
    //      } catch(err) {
    //          console.log(err);
    //      }

    //  };
    // // Function call to initialize app
     init();


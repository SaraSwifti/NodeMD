// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

//const util = require('util');
const generateMarkdown = require(utils/generateMarkdown.js);
//destructuring and bringing in a piece of the package. bringing out the async  part of it. 
const { AsyncLocalStorage } = require('async_hooks');
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
function writeToFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    
//fs.writeToFile('README.md, generateMarkdown)
}
   

    
    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions).then(function(data) { 
            const markData = generateMarkdown(data);
            writeToFile ('README.md', markData);

        });
        
        //
       
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


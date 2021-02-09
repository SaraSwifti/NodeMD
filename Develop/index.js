// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

//const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
//destructuring and bringing in a piece of the package. bringing out the async  part of it. 
const { AsyncLocalStorage } = require('async_hooks');
//const writeFileAsync = util.promisify(fs.writeFile); // not sure if I need this yet, maybe for the badges. I used a promise.then for the other things. 

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
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'What would you like in your table of contents?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are your installation instructions?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How should this porject be used?'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What kind of licencing?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What contributions do you have with this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What kind of testing was done with the project?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What kind of questions do you have? '
        },
    ];

      // TODO: Create a function to write README file
function writeToFile (fileName, data) {
    //I have never seen this before and have no idea what it is doing. They just gave me this line out of mercy in the homework session. 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    
};
   

    
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


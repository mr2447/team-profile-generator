// Start the application
    //Inquirer prompt for team manager information
        // Create a new Manager object using the input from the user
    // Dislay menu 
        // user selects Intern or Engineer 
            //user gets prompted with questions depending if they choose Intern or Engineer
                //createIntern method, createEngineer method
            //Create intern or engineer object using the inputs
            //Push this new object to an output array
            //display menu 
        // user selects Complete my Team
            // Take manager object and employee array, generate HTML based on those objects
const fs = require('fs');
const {prompt} = require('inquirer');
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer =require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js');
const generatePage = require('./src/page-template.js');

let manager;
const team = [];

//Create an array of questrions for user input

const managerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: "What is the your name?",
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id number?'
    },
    { 
        type: 'number',
        name: 'officeNumber',
        message: 'What is your office number?'
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'What type of empliyee would you like to add to the team?',
        choices: ['Engineer', 'Intern', 'createTeam']
    }
];

const engineerPrompt = () => {
    return prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the your name?",   
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'github',
            name: 'github',
            message: 'What is your github username?',
        }
    ])
}

//Create a function to write html file
function writeFile(employee) {
    fs.writeFileSync('./dist/index.html', generatePage(employee)), err => {
      if(err) {
        console.log(err);
        return;
      }
      console.log('Profile generated, Check out index.html to see the output!');
    }
}

//create a funciton to initiate app
function init() {
    return prompt(managerPrompt)
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(manager)
        switch (answers.employeeType) {
            case 'Engineer': 
                engineerPrompt()
                .then(answers => {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                    team.push(engineer)
                    console.log(team)
                    prompt(managerPrompt[4])
                })
                
            case 'Intern':
                //internPrompt();
                prompt(managerPrompt[4])
            case 'createTeam':
                //writeFile()
        }
    })

};

//function createTeam() {
    // Display the menu with 'new engineer' 'new intern' 'complete my team' option
    
    //return team
//}

//call to initiate the app
init();
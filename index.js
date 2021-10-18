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
const Prompt = require('inquirer/lib/prompts/base');

//let manager;
const team = [];

//Create an array of questrions for user input

const managerPrompt = () => {
  return prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the your name?",
        validate: managerName => {
            if (managerName) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter an email.');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id number?',
        validate: (id) => {
            if (id) {
                return true;
            } else {
                console.log('Please enter an ID.');
                return false;
            };
        }
    },
    { 
        type: 'number',
        name: 'officeNumber',
        message: 'What is your office number?',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log('Please enter an office number.');
                return false;
            };
        }
    }
  ])
  .then(answers => {
    const manager = new Manager(answers.name, answers.email, answers.id, answers.officeNumber)
    team.push(manager)
    console.log(team)
  })
};

const menuPrompt =() => {
    return prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of empliyee would you like to add to the team?',
            choices: ['Engineer', 'Intern', 'createTeam']
        }
    ])
    .then(answer => {
        switch (answer.employeeType) { 
           case 'Engineer':
               engineerPrompt()
               .then(menuPrompt)
               break; 
           case 'Intern':
               internPrompt()
               .then(menuPrompt)
               break;
           case 'createTeam':
               writeFile(team)
               break;
        }
    });
      
}
const engineerPrompt = () => {
    return prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",   
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
            validate: (id) => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an ID.');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is engineer's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email.');
                    return false;
                };
            }
        },
        {
            type: 'github',
            name: 'github',
            message: "What is engineer's github username?",
            validate: (username) => {
                if (username) {
                    return true;
                } else {
                    console.log('Please enter an username.');
                    return false;
                };
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(engineer)
        console.log(team)
    })
};

const internPrompt = () => {
    return prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is intern's id?",
            validate: (id) => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an ID.');
                    return false;
                };
            }
        },
        {
            typpe: 'input',
            name: 'email',
            message: "What is intern's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email.');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'school',
            messag: "What is intern's school?",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter a school.');
                    return false;
                };
            }
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(intern);
        console.log(team)
    })
}
//Create a function to write html file
function writeFile(team) {
    console.log(team)
    fs.writeFileSync('./dist/index.html', generatePage(team)), err => {
      if(err) {
        console.log(err);
        return;
      }
      console.log('Profile generated, Check out index.html to see the output!');
    }
    fs.copyFile('./src/style.css', './dist/style.css', err =>{
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Style sheet copied successfully!')
        }
    });
};

//create a funciton to initiate app
function init() {
    managerPrompt()
    .then(menuPrompt)
};

//function createTeam() {
    // Display the menu with 'new engineer' 'new intern' 'complete my team' option
    
    //return team
//}

//call to initiate the app
init();
const fs = require('fs');
const {prompt} = require('inquirer');
const Employee = require('./lib/Employee.js')
const generatePage = require('./src/page-template.js');

//Create an array of questrions for user input

const questions = [
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the employee's name?",
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

//Create a function to write html file
function writeFile() {
    fs.writeFileSync('./dist/index.html', generatePage()), err => {
        if(err) {
        console.log(err);
        return;
        } else {
        console.log('Profile generated, Check out index.html to see the output!')
        }
    }
}

//create a funciton to initiate app
function init() {
    return prompt(questions)
    .then((data) => {
    new Employee(data)
    writeFile()
    })
}

//call to initiate the app
init();
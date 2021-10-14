const fs = require('fs');
const generatePage = require('./src/page-template.js');
console.log(generatePage)

fs.writeFile('./dist/index.html',JSON.stringify(generatePage), err => {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('Profile generated, Check out index.html to see the output!')
    }
})
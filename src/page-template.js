function renderTeam (team) {
    const cards = []
    team.forEach(employee => {
        const html = employee.getRole() === 'Engineer' ?
        `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employee.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <a href="mailto.${employee.email}">${employee.email}</a></li>
                <li class="list-group-item">Github: <a href="${employee.github}.com" target="_blank">${employee.github}</a></li>
            </ul>
        </div>        
      </div>` : employee.getRole() ==='Intern' ? 
        `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employee.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <a href="mailto.${employee.email}">${employee.email}</a></li>
                <li class="list-group-item">School: ${employee.school}</li>
            </ul>
        </div>        
      </div>` : employee.getRole() === 'Manager' ? 
        `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employee.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <a href="mailto.${employee.email}">${employee.email}</a></li>
                <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
            </ul>
        </div>        
      </div>` : ``;
      cards.push(html)
    })
    return cards.join('');
}

//export function to generate entore page 
function generatePage(team) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Profile</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
<link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<p>Page generated!</p>
<div class="card-container">
${renderTeam(team)}
</div>
</body>
</html>
`;
};

module.exports = generatePage
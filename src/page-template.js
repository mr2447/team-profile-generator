
//export function to generate entore page 
function generatePage(manager) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Profile</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
<link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<p>Page generated!</p>
<p>The Employee's name is ${manager.getName()}</p>
<p>Id: ${manager.getId()}</p>
<p>email: ${manager.getEmail()}</p>
<p>Role: ${manager.getRoles()}</p>
<p>Office#: ${manager.getOfficeNumber()}</p>
</body>
</html>
`;
};
module.exports = generatePage
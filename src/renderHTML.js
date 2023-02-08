const htmlLiteral = (array) => {
  // const employeeRole = renderEmployee(data.role)
  // const [role] = employeeRole
  let cardTemplate = ``;
  for (let i = 0; i < array.length; i++) {
    const role = array[i].getRole();
    switch (role) {
      case "Manager":
        cardTemplate += `<!-- MANAGER -->
          <div
            class="card col col-sm-4 border-secondary m-3 rounded"
            style="max-width: 18rem">
            <div class="p-2 g-col-4">
              <img
                src="./assets/manager.png"
                class="card-img-top"
                alt="Manager"/>
              <div class="card-body">
                <h5 class="card-title">${array[i].getRole()}</h5>
                <p class="card-text">
                  ${array[i].name} 
                  <br/>
                  <a href='mailto:${array[i].email}'>${array[i].email}</a> 
                  <br/>
                  ${array[i].officeNumber}
                </p>
              </div>
            </div>
          </div>`;
        break;
      case "Engineer":
        cardTemplate += `<!-- ENGINEER -->
          <div
            class="card col col-sm-4 border-secondary m-3 rounded"
            style="max-width: 18rem">
            <img
              src="./assets/engineer.png"
              class="card-img-top"
              alt="Engineer"/>
            <div class="card-body">
              <h5 class="card-title">${array[i].getRole()}</h5>
              <p class="card-text">
                ${array[i].name} 
                <br/>
                <a href='mailto:${array[i].email}'>${array[i].email}</a> 
                <br/>
                <a href="https://www.github.com/${array[i].github}"> ${array[i].github} </a>
              </p>
            </div>
          </div>`;
        break;
      case "Intern":
        cardTemplate += `<div
            class="card col col-sm-4 border-secondary m-3 rounded"
            style="max-width: 18rem">
            <img src="./assets/student.png" class="card-img-top" alt="student" />
            <div class="card-body">
              <h5 class="card-title">${array[i].getRole()}</h5>
              <p class="card-text">
                ${array[i].name} 
                <br/>
                <a href='mailto:${array[i].email}'>${array[i].email}</a> 
                <br/>
                ${array[i].school}
              </p>
            </div>
          </div>`;
        break;
      default:
        break;
    }
  }


  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"/>

    <title>Employee Roster</title>
  </head>

  <body class="bg-secondary">

    <!-- NAV BAR -->
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="./assets/logo2.png"
            alt="Logo"
            width="50"
            height="50"
            class="d-inline-block align-text-center"/>
          Company A
        </a>
      </div>
    </nav>

    <!-- HEADER -->
    <h1 class="text-center text-light p-2">
      Below is a contact sheet for our employees
    </h1>

    <!-- CARD CONTAINER -->
    <div class="container bg-dark-subtle rounded">
      <!-- CARDS -->
      <div class="row d-flex justify-content-center">
        
  ${cardTemplate}

      </div>
    </div>

  </body>
</html>`;

};

module.exports = htmlLiteral

renderEmployee = (role) => {
  switch(role) {
    case 'Manager':
      return [
        `
    <div class="card" style="width: 18rem;">
    <img src="./assets/manager.jpeg" class="card-img-top" alt="Manager">
    <div class="card-body">
      <h5 class="card-title"> ${data.role} </h5>
      <p class="card-text"> ${data.name} <br>
        ${data.email} <br>
        ${data.officeNumber}
      </p>
    </div>
  </div>`
      ];
      break;
    case 'Engineer':
      return [
        `
        <div class="card" style="width: 18rem;">
        <img src="./assets/manager.jpeg" class="card-img-top" alt="Manager">
        <div class="card-body">
          <h5 class="card-title"> ${data.role} </h5>
          <p class="card-text"> ${data.name} <br>
            ${data.email} <br>
            ${data.github}
          </p>
        </div>
      </div>`
      ];
      break;
    case 'Intern':
      return [
        `
        <div class="card" style="width: 18rem;">
        <img src="./assets/manager.jpeg" class="card-img-top" alt="Manager">
        <div class="card-body">
          <h5 class="card-title"> ${data.role} </h5>
          <p class="card-text"> ${data.name} <br>
            ${data.email} <br>
            ${data.school}
          </p>
        </div>
      </div>`
      ];
      break;
  }
}
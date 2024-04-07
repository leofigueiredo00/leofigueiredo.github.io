const btnShowProjects = document.querySelector('.btn-show-projects');

let quantityOfProjects = 4;

document.addEventListener("DOMContentLoaded", function () {
  showProjects(quantityOfProjects);
});

btnShowProjects.addEventListener('click', showMoreProjetos)

function showProjects(quantityOfProjetcs) {
  const projects = document.querySelectorAll('.project');

  for (let i = 0; i < quantityOfProjects; i++) {
    if (projects[i]) {
      projects[i].classList.add('active')
    }
  }
}

function showMoreProjetos() {
  const quantityTotalProjetos = document.querySelectorAll('.project').length;
  quantityOfProjects += 4; // Increment mor 4 projects to be showing
  showProjects(quantityOfProjects);

  if (quantityOfProjects >= quantityTotalProjetos) {
    btnShowProjects.classList.add('remove') // Hide the buttons if all the projects is showing
  }
}
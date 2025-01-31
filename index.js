// Problem: Content is collapsing/expanding if I click the same link everytime
// Solution: Disable links in Navbar if the content is expanded so that it will 
//           not collapse and can only click the other link to show their respected
//           content


//Get all link id
//const aboutLink = document.getElementsById('about')
//const projectLink = document.getElementsById('project')

const myCollapsibleAbout = document.getElementById('collapseAboutTitle')
const myCollapsibleProject = document.getElementById('collapseProjectTitle')
const myCollapsibleContact = document.getElementById('collapseContactTitle')

document.getElementById('aboutLink').classList.add("disabled");

myCollapsibleAbout.addEventListener('show.bs.collapse', event => {
  document.getElementById('aboutLink').classList.add("disabled")
  document.getElementById('aboutLink').classList.add("active");
  document.getElementById('projectLink').classList.remove("disabled")
  document.getElementById('projectLink').classList.remove("active");
  document.getElementById('contactLink').classList.remove("disabled")
  document.getElementById('contactLink').classList.remove("active");
});

myCollapsibleProject.addEventListener('show.bs.collapse', event => {
  document.getElementById('aboutLink').classList.remove("disabled")
  document.getElementById('aboutLink').classList.remove("active");
  document.getElementById('projectLink').classList.add("disabled")
  document.getElementById('projectLink').classList.add("active");
  document.getElementById('contactLink').classList.remove("disabled")
  document.getElementById('contactLink').classList.remove("active");
});

myCollapsibleContact.addEventListener('show.bs.collapse', event => {
  document.getElementById('aboutLink').classList.remove("disabled")
  document.getElementById('aboutLink').classList.remove("active");
  document.getElementById('projectLink').classList.remove("disabled")
  document.getElementById('projectLink').classList.remove("active");
  document.getElementById('contactLink').classList.add("disabled")
  document.getElementById('contactLink').classList.add("active");
}); 



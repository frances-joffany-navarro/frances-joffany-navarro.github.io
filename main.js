/* Initialize Tooltip Component */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* Setup Type.js animation */
var typed = new Typed('.auto-type', {
  strings: ['Web Developer','Lives in Brussels, Belgium', 'Practise DevOps Integration'],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true
});
const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  menu = document.querySelector(".menu"),
  modeToggle = document.querySelector(".dark-light"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose"),
  educations1 = document.querySelector(".educations1"),
  educations2 = document.querySelector(".educations2"),
  educations3 = document.querySelector(".educations3"),
  skishadow1 = document.querySelector(".ski-shadow1"),
  skishadow2 = document.querySelector(".ski-shadow2"),
  skishadow3 = document.querySelector(".ski-shadow3"),
  pro = document.querySelector(".pro"),
  Contacts = document.querySelector(".footer");

//scroll down
window.addEventListener("wheel", function (event) {
  if (event.deltaY < 0) {
    console.log("scrolling up");
    nav.classList.add("sticky-top");
  }
});

//menu nav scroll click
menu.addEventListener("click", () => {
  nav.classList.remove("sticky-top");
});

let getMode = localStorage.getItem("mode");

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  nav.classList.toggle("dark");
  educations1.classList.toggle("dark-edu");
  educations2.classList.toggle("dark-edu");
  educations3.classList.toggle("dark-edu");
  skishadow1.classList.toggle("dark-edu");
  skishadow2.classList.toggle("dark-edu");
  skishadow3.classList.toggle("dark-edu");
  pro.classList.toggle("dark-edu");
  Contacts.classList.toggle("dark-edu");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

if (getMode == "dark-mode") {
  //adding dark
  modeToggle.classList.add("active");
  body.classList.add("dark");
  nav.classList.add("dark");
  educations1.classList.add("dark-edu");
  educations2.classList.add("dark-edu");
  educations3.classList.add("dark-edu");
  skishadow1.classList.add("dark-edu");
  skishadow2.classList.add("dark-edu");
  skishadow3.classList.add("dark-edu");
  pro.classList.add("dark-edu");
  Contacts.classList.add("dark-edu");
}

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

//current year
const yearElement = document.querySelector(".footer-copyright");
const currentYear = new Date().getFullYear();

yearElement.innerHTML = "© " + currentYear + " Anupam Lugun ";

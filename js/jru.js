

const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    menu = document.querySelector(".menu"),
    modeToggle = document.querySelector(".dark-light"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");


//scroll down
window.addEventListener('wheel', function (event) {

    if (event.deltaY < 0) {
        console.log("scrolling up");
        nav.classList.add("sticky-top");
    }
});

//menu nav scroll click
menu.addEventListener('click', () => {
    nav.classList.remove("sticky-top");
});

let getMode = localStorage.getItem("mode");


// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    nav.classList.toggle("dark");


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
}


//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});

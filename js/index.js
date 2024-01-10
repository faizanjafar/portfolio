const menuBtn = document.getElementById("menu-btn");
const menuItems = document.getElementById("menu_items");
const header = document.getElementById("header");


window.onscroll = function () {
    if (document.documentElement.scrollTop > 30) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}

menuBtn.addEventListener('click', () => {
    menuItems.classList.toggle('active');
})

// active nav 
const navLink = document.querySelectorAll(".nav_link");
function activeNav() {
    navLink.forEach(l=>l.classList.remove("active"))
    this.classList.add("active");
    menuItems.classList.remove('active');
}
navLink.forEach(l=>l.addEventListener("click", activeNav));


// Portifolio section
let mixerPortfolio = mixitup(".galley-container", {
    selectors: {
        target: '.image-overlay'
    },
    animation: {
        duration: 300
    }
});

// active portfolio 
const linkwork = document.querySelectorAll(".p-btn");
function activeWork() {
    linkwork.forEach(l=>l.classList.remove("active-btn"))
    this.classList.add("active-btn");
}
linkwork.forEach(l=>l.addEventListener("click", activeWork))

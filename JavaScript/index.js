document.querySelectorAll('.menus a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menubar = document.querySelector(".menubar");
    const menuList = document.querySelector(".menus");
    const menuItems = document.querySelectorAll(".menus li a");

    // Toggle menu visibility on clicking the menu bar icon
    menubar.addEventListener("click", function () {
        menuList.classList.toggle("active");
    });

    // Close menu when a menu item is clicked and navigate to the section smoothly
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute("href"); // Get target section ID
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for fixed header
                    behavior: "smooth" // Smooth scrolling effect
                });
            }

            // Hide menu after clicking in mobile view
            menuList.classList.remove("active");
        });
    });
});


let index = 0;
function showSlide(n) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (n >= totalSlides) index = 0;
    if (n < 0) index = totalSlides - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;
}
function nextSlide() {
    index++;
    showSlide(index);
}
function prevSlide() {
    index--;
    showSlide(index);
}
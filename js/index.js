var element = document.querySelector("menu");

function checkSticky() {
    var position = element.getBoundingClientRect().top;
    if (position <= 0) {
        element.classList.add("sticky_menu");
    } else {
        element.classList.remove("sticky_menu");
    }
}

window.addEventListener("scroll", checkSticky);

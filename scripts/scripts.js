//burger menu
const burgerMenu = document.querySelector(".nav__burger");
const menuBody = document.querySelector(".nav__menu-body");

if (burgerMenu) {
    burgerMenu.addEventListener("click", (e) => {
        //lock page scroll on menu open 
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    })
}

//smooth scroll
const menulinks = document.querySelectorAll(".nav__link[data-goto]");
if (menulinks.length > 0) {
    menulinks.forEach(menulink => {
        menulink.addEventListener("click", onLinkClick);
    });

    function onLinkClick(e) {
        const link = e.target; 

        //if the attribute value && indicated block exist 
        if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
            const goToBlock = document.querySelector(link.dataset.goto);

            //calculate the distance from the top
            const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".nav").offsetHeight; 
    
            //close menu when link is clicked and unlock the scroll
            if (burgerMenu.classList.contains("_active")) {
                document.body.classList.remove("_lock");
                burgerMenu.classList.remove("_active"); 
                menuBody.classList.remove("_active"); 
            }

            window.scrollTo({
                top: goToBlockValue,
                behavior: "smooth"
            })
            e.preventDefault();
        }
    }
}

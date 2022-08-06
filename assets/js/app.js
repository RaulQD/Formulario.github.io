/* ==========SCROLL HEADER  ===========*/
const header = document.querySelector('#header');

/**
 * If the user scrolls down, add the class 'scroll-header' to the header element. If the user scrolls
 * back up, remove the class 'scroll-header' from the header element.
 */
function scrollHeader(){
    if(this.scrollY){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header');   
    }
}
window.addEventListener('scroll', scrollHeader);

/**
 * If the toggleId and navId exist, then add an event listener to toggleId that toggles the class
 * 'show' on navId.
 * @param toggleID - the id of the element that will toggle the menu
 * @param navID - The ID of the navbar you want to toggle.
 * @param closeID - The ID of the element that will close the menu.
 */
const showMenu = (toggleID, navID, closeID) => {
    const toggleId = document.getElementById(toggleID),
        navId = document.getElementById(navID),
        closeId = document.getElementById(closeID)

    if (toggleId && navId) {
        toggleId.addEventListener('click', () => {
            navId.classList.toggle('show');
        })
    }
    if (closeId && navId) {
        closeId.addEventListener('click', () => {
            navId.classList.remove('show');
        })
    }
}
showMenu('nav-toggle', 'nav-menu', 'nav-close');

/**
 * When a nav link is clicked, remove the active-link class from all nav links, then add the
 * active-link class to the clicked nav link.
 */
const navLink = document.querySelectorAll('.nav__link');

function linkActive(){
    navLink.forEach( n => n.classList.remove('active-link'));
    this.classList.add('active-link')

    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(link => link.addEventListener('click', linkActive));


/**
 * If the current section is in the viewport, add the class 'active-link' to the corresponding nav
 * link, otherwise remove the class.
 */
 const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 280;
        const sectionID = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('a[href*=' + sectionID + ']').classList.add('active-link');
        } else {
            document.querySelector('a[href*=' + sectionID + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);
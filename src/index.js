import {loadHomePage, loadMenuPage, loadContactPage} from './homePage.js';
import "./style.css";

const mainContent = document.getElementById('content'); //selector for mainContent

//div element to center of the page, maximum width of 80vh, with padding on top
const contentContainer = document.createElement('div');
contentContainer.className = "container";

mainContent.appendChild(contentContainer);

//navbar for all pages
const navbar = document.createElement('nav');
navbar.id = 'nav-bar'
navbar.innerHTML = `
        <ul id="nav-links">
            <li><button class="home tab">Home</button></li>
            <li><button class="menu tab">Menu</button></li>
            <li><button class="contact tab">Contact</button></li>
        </ul>
`
//append to container
contentContainer.appendChild(navbar);

//create div element to append to container - to be reloaded upon tab clicks
const changingContainer = document.createElement('div');
changingContainer.className = 'module-container';

//append module container to content
contentContainer.appendChild(changingContainer);

//initial load of homepage.js into module container
loadHomePage(); //initiates main index.js page

//module to select tabs
(() => {
    const navBtns = document.querySelectorAll('.tab');

    function sortBtns(e) {
        const element = e.target;

        if (element.classList.contains('home')) {
            loadHomePage();
        }

        if (element.classList.contains('contact')) {
            loadContactPage();
        }

        if (element.classList.contains('menu')) {
            loadMenuPage();
        }
    }

    navBtns.forEach(btn => btn.addEventListener('click', sortBtns));
})();
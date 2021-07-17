import {loadHomePage, loadMenuPage, loadContactPage} from './modules.js';
import "./style.css";

const mainContent = document.getElementById('content'); //selector for mainContent

//div element to center of the page, maximum width of 80vh, with padding on top
const contentContainer = document.createElement('div');
contentContainer.className = "container";

mainContent.appendChild(contentContainer);

//navbar for all pages
const navWrapper = document.createElement('div');
navWrapper.className = 'nav-wrapper'
navWrapper.innerHTML = `
    <nav id="nav-bar">
        <ul id="nav-links">
            <li><button class="home tab">Home</button></li>
            <li><button class="menu tab">Menu</button></li>
            <li><button class="contact tab">Contact</button></li>
        </ul>
    </nav>
`
//append to container
contentContainer.appendChild(navWrapper);

//create div element to append to container - to be reloaded upon tab clicks
const changingContainer = document.createElement('div');
changingContainer.className = 'module-container';

//append module container to content
contentContainer.appendChild(changingContainer);

//initial load of homepage.js into module container
loadHomePage(); //initiates main index.js page

//IIFE to select tabs
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
import loadHomePage from './homePage.js';
import "./style.css";

const mainContent = document.getElementById('content');

//div element to center of the page, maximum width of 80vh, with padding on top
const contentContainer = document.createElement('div');
contentContainer.className = "container";

mainContent.appendChild(contentContainer);

//navbar for all pages
const navbar = document.createElement('nav');
navbar.id = 'nav-bar'
navbar.innerHTML = `
        <ul id="nav-links">
            <li><a class="home" href="#">Home</a></li>
            <li><a class="menu" href="#">Menu</a></li>
            <li><a class="contact" href="#">Contact</a></li>
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
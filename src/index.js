import loadHomePage from './homePage.js';
import "./style.css";

const mainContent = document.getElementById('content');

//header for all pages
const header = document.createElement('header')
header.innerHTML = `
    <nav id="nav-bar">
        <ul id="nav-links">
            <li><a class="home" href="#">Home</a></li>
            <li><a class="menu" href="#">Menu</a></li>
            <li><a class="contact" href="#">Contact</a></li>
        </ul>
    </nav>
`
//append to mainContent
mainContent.appendChild(header);

loadHomePage(); //initiates main index.js page

//template to create elements and put to content
//create selector for content div, insert append created elements to mainContent - index page

import loadPage from './pageLoad.js';
import "./style.css";
import loadImage from './images/default.png';

loadPage('Samuel'); //console logs 'Hello, Samuel!'

//template to create elements and put to content
//create selector for content div, insert append created elements to mainContent - index page
const mainContent = document.getElementById('content');

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

//append company image to mainContent
const sideLogo = new Image();
sideLogo.className = 'main-image';
sideLogo.src = loadImage;

mainContent.appendChild(sideLogo);
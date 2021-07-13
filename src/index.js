import loadPage from './pageLoad.js';
import "./style.css"

loadPage('Samuel'); //console logs 'Hello, Samuel!'

//template to create elements and put to content
//create selector for content div, insert append created elements to mainContent - index page
const mainContent = document.getElementById('content');

const header = document.createElement('header')

header.innerHTML = `
    <nav class="nav-bar">
        <ul>
            <li><a class="home link" href="#">Home</a></li>
            <li><a class="menu link" href="#">Menu</a></li>
            <li><a class="contact link" href="#">Contact</a></li>
        </ul>
    </nav>
`

//append to mainContent
mainContent.appendChild(header);
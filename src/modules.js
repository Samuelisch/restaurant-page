//import background images here
import loadImage from './images/default.png';

//module containing inital page-load, to be exported to index.js
const loadHomePage = () => {
    const container = document.querySelector('.module-container');

    //clear container of elements
    container.innerHTML = '';

    //create new variable that initialises a new image
    const sideLogo = new Image();
    sideLogo.className = 'main-image';
    sideLogo.src = loadImage; //style image in css file - limit size

    //append company image to mainContent
    container.appendChild(sideLogo);
};

const loadMenuPage = () => {
    const container = document.querySelector('.module-container');

    //clear container of elements
    container.innerHTML = '';

    //create contents of contactPage and append to container
    const menu = document.createElement('div');
    menu.id = 'menu';

    menu.innerHTML = `
        <h1>Menu</h1>
        <div class="menu-wrapper">
            
        </div>
    `;

    container.appendChild(menu);
}

const loadContactPage = () => {
    const container = document.querySelector('.module-container');

    //clear container of elements
    container.innerHTML = '';

    //create contents of contactPage and append to container
    const contactForm = document.createElement('form');
    contactForm.id = 'contact';

    contactForm.innerHTML = `
        <div class="form-inner">
            <h1 class="contact-title">Contact us</h1>

            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message..." rows="5"></textarea>

            <button type="submit" href="/">Submit</button>
        </div>
    `;

    container.appendChild(contactForm);
}

//named export for each module
export {loadHomePage, loadMenuPage, loadContactPage};
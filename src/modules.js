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
            <div class="food appetisers">
                <h3>Appetisers</h3>
                <ul>
                    <li>
                        Beef Satay
                        <br/>
                        <i class="food-desc">&emsp;Tangy, tender skewered tenderloin</i>
                    </li>
                    <li>
                        Roast Beef Sliders
                        <br/>
                        <i class="food-desc">&emsp;Sliced from our signature prime rib</i>
                    </li>
                    <li>
                        Summer Potato Salad
                        <br/>
                        <i class="food-desc">&emsp;Warm - with onions, chives, and onsen egg</i>
                    </li>
                    <li>
                        Thick-cut Calamari Rings
                        <br/>
                        <i class="food-desc">&emsp;Deep-fried with traditional batter</i>
                    </li>
                </ul>
            </div>
            <div class="food mains">
                <h3>Mains</h3>
                <ul>
                    <li>
                        A7 Wagyu Beef Sashimi Platter
                        <br/>
                        <i class="food-desc">&emsp;Served with a bowl of torched wagyu beef don</i>
                    </li>
                    <li>
                        Beef Taco
                        <br/>
                        <i class="food-desc">&emsp;Corn tortilla with slow-smoked beef brisket</i>
                    </li>
                    <li>
                        Spaghetti Bolognese
                        <br/>
                        <i class="food-desc">&emsp;Classic dish with hand-minced beef</i>
                    </li>
                    <li>
                        Signature Thick-cut Prime Rib
                        <br/>
                        <i class="food-desc">&emsp;Served with choice of au jus or chimichurri</i>
                    </li>
                    <li>
                        Signature Angus Beef Steak
                        <br/>
                        <i class="food-desc">&emsp;Choice of cut: Ribeye / Sirloin / Tomahawk</i>
                    </li>
                </ul>
            </div>
            <div class="food sides">
            </div>
            <div class="food desserts">
            </div>
            <div class="food beverages">
            </div>
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
//import background images here
import loadImage from './images/default.png';
import calamari from './images/calamari.jpg';
import pudding from './images/pudding.jpg';
import roastBeef from './images/roast-beef.jpg';
import sparkling from './images/sparkling.jpg';
import squid from './images/squid.jpg';

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

    function createImage(img) {
        const image = new Image();
        image.className = `image`
        image.src = img;
        return image;
    }

    menu.innerHTML = `
        <div class="menu-wrapper">
            <div class="food appetisers">
                <h3>Appetisers</h3>
                <div class="appetiser-image food-image"></div>
                <ul>
                    <li>
                        Beef Satay
                        <br/>
                        <i class="food-desc">&emsp;tangy, tender skewered tenderloin</i>
                    </li>
                    <li>
                        Roast Beef Sliders
                        <br/>
                        <i class="food-desc">&emsp;sliced from our signature prime rib</i>
                    </li>
                    <li>
                        Beef Nachos
                        <br/>
                        <i class="food-desc">&emsp; with guacamole, sour cream, kidney beans</i>
                    </li>
                    <li>
                        Fresh squid
                        <br/>
                        <i class="food-desc">&emsp;seasoned with salt, pepper and lemon zest</i>
                    </li>
                </ul>
            </div>
            <div class="food mains">
                <h3>Mains</h3>
                <div class="mains-image food-image"></div>
                <ul>
                    <li>
                        A7 Wagyu Beef Sashimi Platter
                        <br/>
                        <i class="food-desc">&emsp;served with a bowl of torched wagyu beef don</i>
                    </li>
                    <li>
                        Beef Tacos
                        <br/>
                        <i class="food-desc">&emsp;corn tortilla with slow-smoked beef brisket</i>
                    </li>
                    <li>
                        Spaghetti Bolognese
                        <br/>
                        <i class="food-desc">&emsp;classic dish with hand-minced beef</i>
                    </li>
                    <li>
                        Signature Thick-cut Prime Rib
                        <br/>
                        <i class="food-desc">&emsp;served with choice of au jus or chimichurri</i>
                    </li>
                    <li>
                        Signature Angus Beef Steak
                        <br/>
                        <i class="food-desc">&emsp;choice of cut: ribeye / sirloin / tomahawk</i>
                    </li>
                </ul>
            </div>
            <div class="food sides">
                <h3>Side dishes</h3>
                <div class="sides-image food-image"></div>
                <ul>
                    <li>
                        Potato Salad
                        <br/>
                        <i class="food-desc">&emsp;warm - with onions, chives and rosemary</i>
                    </li>
                    <li>
                        Mashed Potatoes
                        <br/>
                        <i class="food-desc">&emsp;with a blend of spices</i>
                    </li>
                    <li>
                        Crispy truffle fries
                        <br/>
                        <i class="food-desc">&emsp;warm - with onions, chives and rosemary</i>
                    </li>
                    <li>
                        Fried Calamari Rings
                        <br/>
                        <i class="food-desc">&emsp;deep-fried with traditional batter</i>
                    </li>
                </ul>
            </div>
            <div class="food desserts">
                <h3>Desserts</h3>
                <div class="desserts-image food-image"></div>
                <ul>
                    <li>
                        Toffee Pudding
                        <br/>
                        <i class="food-desc">&emsp;served with vanilla ice-cream</i>
                    </li>
                    <li>
                        Shahi Tukda with condensed milk
                        <br/>
                        <i class="food-desc">&emsp;topped with frated paneer</i>
                    </li>
                    <li>
                        Fruit platter
                        <br/>
                        <i class="food-desc">&emsp;only the freshest selection for the day</i>
                    </li>
                    <li>
                        Bowl of acai
                        <br/>
                        <i class="food-desc">&emsp;with assorted fruits, nuts and almond butter</i>
                    </li>
                </ul>
            </div>
            <div class="food beverages">
                <h3>Beverages</h3>
                <div class="beverages-image food-image"></div>
                <ul>
                    <li>
                        Wines & other alcoholic beverages
                        <br/>
                        <i class="food-desc">&emsp;consult your server for a list or reccomendation</i>
                    </li>
                    <li>
                        Soft drinks
                        <br/>
                        <i class="food-desc">&emsp;coke / sprite / diet sodas</i>
                    </li>
                    <li>
                        Sparkling water
                        <br/>
                        <i class="food-desc">&emsp;san Pellegrino / perrier</i>
                    </li>
                    <li>
                        Juices
                        <br/>
                        <i class="food-desc">&emsp;from the selection for the day</i>
                    </li>
                </ul>
            </div>
        </div>
    `;

    container.appendChild(menu);

    //add images for menu
    const appetiserImage = document.querySelector('.appetiser-image');
    appetiserImage.appendChild(createImage(squid));
    const mainsImage = document.querySelector('.mains-image');
    mainsImage.appendChild(createImage(roastBeef));
    const sidesImage = document.querySelector('.sides-image');
    sidesImage.appendChild(createImage(calamari));
    const dessertsImage = document.querySelector('.desserts-image');
    dessertsImage.appendChild(createImage(pudding));
    const waterImage = document.querySelector('.beverages-image');
    waterImage.appendChild(createImage(sparkling));
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
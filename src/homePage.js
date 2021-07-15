import loadImage from './images/default.png';
//module containing inital page-load, to be exported to index.js
const loadPage = () => {
    const container = document.querySelector('.module-container');

    //create new variable that initialises a new image
    const sideLogo = new Image();
    sideLogo.className = 'main-image';
    sideLogo.src = loadImage; //style image in css file - limit size

    //append company image to mainContent
    container.appendChild(sideLogo);
};

//default export
export default loadPage;
import loadImage from './images/default.png';
//module containing inital page-load, to be exported to index.js
const loadPage = (name) => {
    //add icon to shut favicon error up - REMOVE for production environment!
    const mainContent = document.getElementById('content');

    //append company image to mainContent
    const sideLogo = new Image();
    sideLogo.className = 'main-image';
    sideLogo.src = loadImage;

    mainContent.appendChild(sideLogo);
};

//default export
export default loadPage;
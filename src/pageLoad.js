//module containing inital page-load, to be exported to index.js
const loadPage = (name) => {
    //add icon to shut favicon error up - REMOVE for production environment!
    console.log(`Hello, ${name}!`)
};

//default export
export default loadPage;
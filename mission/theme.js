let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let contentBox = document.querySelector('.content-box');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        // Colors
        body.style.backgroundColor = "#1a1a1a";
        contentBox.style.backgroundColor = "#2d2d2d";
        contentBox.style.color = "white";
        
        // ENSURE BORDER IS VISIBLE
        contentBox.style.border = "1px solid #555"; 

        // SWAP TO DARK LOGO
        logo.src = "images/byui-logo-white.webp"; 
    } 
    else {
        // Colors
        body.style.backgroundColor = "white";
        contentBox.style.backgroundColor = "white";
        contentBox.style.color = "black";
        
        // RESET BORDER
        contentBox.style.border = "1px solid #ccc"; 

        // SWAP TO ORIGINAL LOGO
        logo.src = "images/byui-logo-blue.webp";
    }
}
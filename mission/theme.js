let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

// We also need to grab the body and the main content box
let body = document.querySelector('body');
let contentBox = document.querySelector('.content-box');
let h2 = document.querySelector('.sub-heading');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    
    if (current == 'dark') {
        // 1. Change the page background to black/dark gray
        body.style.backgroundColor = "#1a1a1a";
        
        // 2. Change the content box colors
        contentBox.style.backgroundColor = "#2d2d2d";
        contentBox.style.color = "white";
        contentBox.style.borderColor = "#555";
        
        // 3. Update the heading line to match
        h2.style.borderBottomColor = "#555";

        // Change the image to dark-mode BYUI version
        logo.src = "images/byui-logo-black.png";

    } else {
        // 1. Reset page background to white
        body.style.backgroundColor = "white";
        
        // 2. Reset the content box colors
        contentBox.style.backgroundColor = "white";
        contentBox.style.color = "black";
        contentBox.style.borderColor = "#ccc";
        
        // 3. Reset the heading line
        h2.style.borderBottomColor = "#ccc";
        
        // 4. Swap back to the blue logo
        logo.src = "images/byui-logo-blue.webp";
    }
}
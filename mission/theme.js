// Select the dropdown and the main elements
let selectElem = document.querySelector('select');
let body = document.querySelector('body');
let contentBox = document.querySelector('.content-box');
let logo = document.querySelector('img');
let subHeading = document.querySelector('.sub-heading');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        // Dark Mode: Black background, White text
        body.style.backgroundColor = "#1a1a1a";
        contentBox.style.backgroundColor = "#333";
        contentBox.style.color = "white";
        contentBox.style.borderColor = "#555"; // Subtle dark border
        subHeading.style.borderBottomColor = "#555";
        
        // SWAP TO DARK LOGO (Ensure this file exists in your images folder)
        logo.src = "images/byui-logo-black.png"; 
    } 
    else {
        // Light Mode: White background, Black text
        body.style.backgroundColor = "white";
        contentBox.style.backgroundColor = "white";
        contentBox.style.color = "black";
        contentBox.style.borderColor = "#ccc"; // Original light border
        subHeading.style.borderBottomColor = "#ccc";
        
        // SWAP TO ORIGINAL BLUE LOGO
        logo.src = "images/byui-logo-blue.webp";
    }
}
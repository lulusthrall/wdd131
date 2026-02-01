// 1. Elements Needed
const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector(".nav-links");
const gallery = document.querySelector(".gallery");

// 2. Mobile Menu Toggle Logic
function toggleMenu() {
    navLinks.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);

// 3. Image Modal (Viewer) Logic
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;

    
    if (clickedElement.tagName === "IMG") {
        // Swap -sm for -full for the modal image
        const src = clickedElement.getAttribute("src").replace("-sm", "-full");
        const alt = clickedElement.getAttribute("alt");

        // Add the modal HTML to the top of the body
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(src, alt));

        // Add listener to the 'X' button to close it
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
        
        // Add listener to close if user clicks the dark background area
        document.querySelector(".viewer").addEventListener("click", (e) => {
            if (e.target.className === "viewer") closeViewer();
        });
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) viewer.remove();
}

// 4. Global Event Listeners
gallery.addEventListener("click", viewHandler);

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeViewer();
});

// Clean up: hide mobile menu if window is resized to desktop size
window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
        navLinks.classList.remove("show");
    }
});
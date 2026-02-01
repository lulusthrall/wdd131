const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector(".nav-links");

// Toggle menu for mobile view
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Modal template
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === "IMG") {
        // Change thumbnail src to full image src
        const src = clickedElement.getAttribute("src").replace("-sm", "-full");
        const alt = clickedElement.getAttribute("alt");

        // Add modal to the top of the body
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(src, alt));

        // Listener for the 'X' button
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
        
        // Listener for clicking outside the image (on the dark background)
        document.querySelector(".viewer").addEventListener("click", (e) => {
            if (e.target.className === "viewer") closeViewer();
        });
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) viewer.remove();
}

// Event Listeners
document.querySelector(".gallery").addEventListener("click", viewHandler);

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeViewer();
});

// Ensures menu behaves when resizing window
window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        navLinks.classList.remove("show");
    }
});
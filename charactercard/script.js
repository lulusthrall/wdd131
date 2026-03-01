// Character Object
const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "snortleblat.webp",

    // Method to decrease health
    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health <= 0) {
                this.health = 0;
                alert(`${this.name} has died!`);
            }
        }
        renderCharacter();
    },

    // Method to increase level
    levelUp: function() {
        this.level += 1;
        renderCharacter();
    }
};

// Function to display character data in the DOM
function renderCharacter() {
    document.getElementById('charName').textContent = character.name;
    document.getElementById('charClass').textContent = character.class;
    document.getElementById('charLevel').textContent = character.level;
    document.getElementById('charHealth').textContent = character.health;
    document.getElementById('charImage').setAttribute('src', character.image);
    document.getElementById('charImage').setAttribute('alt', character.name);
}

// Event Listeners for buttons
document.getElementById('attackBtn').addEventListener('click', () => {
    character.attacked();
});

document.getElementById('levelBtn').addEventListener('click', () => {
    character.levelUp();
});

// Initial render
renderCharacter();
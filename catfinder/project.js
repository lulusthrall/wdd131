// my big list of cats for the project
const catBreeds = [
    { name: "Bengal", temperament: "Active", coat: "Short Hair", health: "High maintenance. Risk of HCM.", cost: "$1,800+", info: "Very active and loves to climb. They have a spotted coat.", image: "images/bengals.jpg" },
    { name: "Maine Coon", temperament: "Calm", coat: "Fluffy", health: "Moderate maintenance. Risk of HCM.", cost: "$1,500+", info: "Gentle giants that are great with kids.", image: "images/mainecoons.jpg" },
    { name: "Munchkin", temperament: "Active", coat: "Short Hair", health: "Risk of back issues.", cost: "$1,000+", info: "Famous for their short legs and kitten-like energy.", image: "images/munchkin.jpg" },
    { name: "Norwegian Forest Cat", temperament: "Calm", coat: "Fluffy", health: "Risk of kidney issues.", cost: "$1,400+", info: "Large cats built for cold weather with thick fur.", image: "images/nfc.jpg" },
    { name: "Persian", temperament: "Calm", coat: "Fluffy", health: "Breathing issues. High grooming.", cost: "$2,000+", info: "Prefers a quiet home and regular brushing.", image: "images/persian.jpg" },
    { name: "Ragdoll", temperament: "Calm", coat: "Fluffy", health: "Risk of heart disease.", cost: "$1,600+", info: "Very affectionate cats that go limp when held.", image: "images/ragdoll.jpg" },
    { name: "Russian Blue", temperament: "Calm", coat: "Short Hair", health: "Generally healthy breed.", cost: "$1,800+", info: "Shy with strangers but very loyal to their family.", image: "images/russianblue.jpg" },
    { name: "Scottish Fold", temperament: "Calm", coat: "Short Hair", health: "Risk of joint problems.", cost: "$1,700+", info: "Famous for their unique ears that fold forward.", image: "images/scottishfold.jpg" },
    { name: "Siamese", temperament: "Active", coat: "Short Hair", health: "Risk of eye issues.", cost: "$1,400+", info: "Very vocal and talkative cats that love attention.", image: "images/siamese.jpg" },
    { name: "Sphynx", temperament: "Active", coat: "Hairless", health: "Requires skin care.", cost: "$2,500+", info: "Not hypoallergenic! They need weekly baths.", image: "images/sphynx.webp" }
];

// function to put the cards on the screen
// using forEach because the rubric says to use an array method
function displayCats(dataArray) {
    const container = document.getElementById("results-container");
    container.innerHTML = ""; 

    dataArray.forEach(function(cat, index) {
        const card = document.createElement("section");
        card.className = "breed-card";

        // building the card html here
        card.innerHTML = `
            <div class="card-image"><img src="${cat.image}" alt="${cat.name}" loading="lazy"></div>
            <h3>${cat.name}</h3>
            <div class="trait-tags">
                <span class="tag">${cat.temperament}</span>
                <span class="tag">${cat.coat}</span>
            </div>
            <div class="extra-info" id="info-${index}" style="display:none;">
                <p><strong>Fact:</strong> ${cat.info}</p>
                <p><strong>Health:</strong> ${cat.health}</p>
                <p><strong>Cost:</strong> ${cat.cost}</p>
            </div>
            <div class="info-button" id="btn-${index}">
                <p>Click for Details</p>
            </div>
        `;
        
        container.appendChild(card);

        // making the button work when someone clicks it
        document.getElementById("btn-" + index).addEventListener("click", function() {
            const infoDiv = document.getElementById("info-" + index);
            
            // this is my conditional branching part
            if (infoDiv.style.display === "none") {
                infoDiv.style.display = "block";
                this.innerHTML = "<p>Show Less</p>";
            } else {
                infoDiv.style.display = "none";
                this.innerHTML = "<p>Click for Details</p>";
            }
        });
    });
}

// function to filter the list based on what the user picks
function filterCats() {
    const selector = document.getElementById("filter-select");
    const choice = selector.value;
    
    if (choice === "all") {
        displayCats(catBreeds);
    } else {
        // using .filter for the other array method requirement
        const filteredList = catBreeds.filter(function(cat) {
            return cat.coat === choice || cat.temperament === choice;
        });
        displayCats(filteredList);
    }
}

// listen for when the dropdown changes
document.getElementById("filter-select").addEventListener("change", filterCats);

// start the page with all cats showing
displayCats(catBreeds);
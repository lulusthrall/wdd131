// my list of cats with more facts and details
const catBreeds = [
    { name: "Bengal", temperament: "Active", coat: "Short Hair", health: "High maintenance. Risk of HCM.", cost: "$1,800+", info: "Very active and loves to climb. They have a unique leopard-like spotted coat.", image: "images/bengals.jpg" },
    { name: "Maine Coon", temperament: "Calm", coat: "Fluffy", health: "Moderate maintenance. Risk of HCM.", cost: "$1,500+", info: "One of the largest domestic cats. They are known as gentle giants and are great with kids.", image: "images/mainecoons.jpg" },
    { name: "Munchkin", temperament: "Active", coat: "Short Hair", health: "Moderate maintenance. Back issues.", cost: "$1,000+", info: "Famous for their short legs. They stay kitten-like and fast even as adults.", image: "images/munchkin.jpg" },
    { name: "Norwegian Forest Cat", temperament: "Calm", coat: "Fluffy", health: "Low maintenance. Kidney issues.", cost: "$1,400+", info: "Built for cold weather with a thick double coat. They are very good at climbing trees.", image: "images/nfc.jpg" },
    { name: "Persian", temperament: "Calm", coat: "Fluffy", health: "High maintenance. Breathing issues.", cost: "$2,000+", info: "High maintenance grooming needed. They prefer a very quiet and predictable home.", image: "images/persian.jpg" },
    { name: "Ragdoll", temperament: "Calm", coat: "Fluffy", health: "Low maintenance. Heart disease risk.", cost: "$1,600+", info: "They go limp like a ragdoll when picked up. Very affectionate and docile.", image: "images/ragdoll.jpg" },
    { name: "Russian Blue", temperament: "Calm", coat: "Short Hair", health: "Low maintenance. Generally healthy.", cost: "$1,800+", info: "Very shy with strangers but loyal to owners. Their silver-blue coat is very dense.", image: "images/russianblue.jpg" },
    { name: "Scottish Fold", temperament: "Calm", coat: "Short Hair", health: "Low maintenance. Joint stiffness.", cost: "$1,700+", info: "Known for ears that fold forward. They often sit in a 'Buddha' position.", image: "images/scottishfold.jpg" },
    { name: "Siamese", temperament: "Active", coat: "Short Hair", health: "High maintenance. Risk of PRA eyes.", cost: "$1,400+", info: "Extremely vocal and talkative. They crave constant attention from their humans.", image: "images/siamese.jpg" },
    { name: "Sphynx", temperament: "Active", coat: "Hairless", health: "High maintenance. Needs bathing.", cost: "$2,500+", info: "Not actually hypoallergenic because of skin oils. They need weekly baths to stay clean.", image: "images/sphynx.webp" }
];

// this function makes the cards show up on the page
function displayCats(dataArray) {
    const container = document.getElementById("results-container");
    container.innerHTML = ""; // clean out the old ones first

    // using a basic for loop
    for (let i = 0; i < dataArray.length; i++) {
        const cat = dataArray[i];
        
        const card = document.createElement("section");
        card.className = "breed-card";

        // adding the html for the card
        card.innerHTML = `
            <div class="card-image"><img src="${cat.image}" alt="${cat.name}"></div>
            <h3>${cat.name}</h3>
            
            <div class="trait-tags">
                <span class="tag">${cat.temperament}</span>
                <span class="tag">${cat.coat}</span>
            </div>

            <div class="extra-info" id="info-${i}" style="display:none;">
                <p><strong>Quick Fact:</strong> ${cat.info}</p>
                <p><strong>Health:</strong> ${cat.health}</p>
                <p><strong>Avg Cost:</strong> ${cat.cost}</p>
            </div>

            <div class="info-button" id="btn-${i}">
                <p>Click for More Details</p>
            </div>
        `;
        
        container.appendChild(card);

        // this makes the info show up on the card instead of a popup
        document.getElementById(`btn-${i}`).addEventListener("click", function() {
            const infoDiv = document.getElementById(`info-${i}`);
            
            if (infoDiv.style.display === "none") {
                infoDiv.style.display = "block";
                this.innerHTML = "<p>Show Less</p>";
            } else {
                infoDiv.style.display = "none";
                this.innerHTML = "<p>Click for More Details</p>";
            }
        });
    }
}

// this handles the filtering when the dropdown changes
function filterCats() {
    const selector = document.getElementById("filter-select");
    const choice = selector.value;
    
    if (choice === "all") {
        displayCats(catBreeds);
    } else {
        const filteredList = catBreeds.filter(function(c) {
            return c.coat === choice || c.temperament === choice;
        });
        displayCats(filteredList);
    }
}

// listen for the dropdown change
document.getElementById("filter-select").addEventListener("change", filterCats);

// run it once at the start
displayCats(catBreeds);
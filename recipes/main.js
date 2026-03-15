const recipes = [
	{
		author: 'Provo High Culinary Students',
		tags: ['Waffles', 'Sweet Potato', 'Side'],
		description: 'Savory waffles made with Sweet potato with a hint of Ginger',
		image: './images/sweet-potato-waffle-md.jpg',
		name: 'Sweet Potato Waffles',
		rating: 4
	},
	{
		author: 'Shane Thompson',
		tags: ['Chicken', 'Entree'],
		description: 'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
		image: './images/escalopes-de-poulet-a-la-creme.webp',
		name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
		rating: 4.5
	},
	{
		author: 'Shane Thompson',
		tags: ['Potatoes', 'side'],
		description: 'Easy and delicious oven roasted potatoes that go great with almost anything.',
		image: './images/roasted-potatoes.webp',
		name: 'Oven Roasted potato slices',
		rating: 4
	},
	{
		author: 'Shane Thompson',
		tags: ['Southwest', 'entree'],
		description: 'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
		image: './images/black-beans-and-rice.jpg',
		name: 'Black Beans and Rice',
		rating: 3
	},
	{
		author: 'Shane Thompson',
		tags: ['chicken', 'entree', 'Indian'],
		description: 'Quick and easy Chicken curry recipe made with easy to find ingredients.',
		image: './images/chicken-curry.webp',
		name: 'Chicken Curry',
		rating: 5
	},
	{
		author: 'Shane Thompson',
		tags: ['dessert'],
		description: 'Delicious soft chocolate chip cookies with coconut.',
		image: './images/chocolate-chip-cookies.jpg',
		name: 'Chocolate Chip Cookies',
		rating: 5
	},
	{
		author: 'Ester Kocht',
		tags: ['dessert', 'German'],
		description: "This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet. Made up of a cake base, filled with fresh gooseberries and vanilla cream and finished off with crumble that's flavored with vanilla. A must have recipe for gooseberry lovers!!",
		image: './images/german-gooseberry-cake.jpg',
		name: 'Gooseberry cake with vanilla cream and crumble',
		rating: 5
	},
	{
		author: 'AllRecipes',
		tags: ['dessert'],
		description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
		image: './images/apple-crisp.jpg',
		name: 'Apple Crisp',
		rating: 4
	}
];

function random(num) {
    return Math.floor(Math.random() * num);
}

function recipeTemplate(recipe) {
    return `<article class="recipe-card">
        <div class="recipe-image-container">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
            <div class="tags mobile-only">
                ${recipe.tags.map(tag => `<span class="category">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="recipe-content">
            <div class="tags desktop-only">
                ${recipe.tags.map(tag => `<span class="category">${tag}</span>`).join('')}
            </div>
            <h2>${recipe.name.toUpperCase()}</h2>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${renderStars(recipe.rating)}
            </span>
            <p class="recipe-description">${recipe.description}</p>
        </div>
    </article>`;
}

function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            html += '<span aria-hidden="true">⭐</span>';
        } else {
            html += '<span aria-hidden="true">☆</span>';
        }
    }
    return html;
}

function renderRecipes(recipeList) {
    const container = document.querySelector('#recipe-container');
    container.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        const lowerQuery = query.toLowerCase();
        return (
            recipe.name.toLowerCase().includes(lowerQuery) ||
            recipe.description.toLowerCase().includes(lowerQuery) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        );
    });
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
    e.preventDefault();
    const input = document.querySelector('#search-input');
    const query = input.value;
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

function init() {
    const recipe = recipes[random(recipes.length)];
    renderRecipes([recipe]);
}

document.querySelector('#search-btn').addEventListener('click', searchHandler);
init();
// List of Poems
const poems = [
    {
        title: "Poem 1: 'A Moment of Love'",
        content: `My heart beats with every thought of you, <br>In every breath, love feels so true. <br>Your eyes, a universe, so bright, <br>With you, my love, I take flight.`
    },
    {
        title: "Poem 2: 'Endless Togetherness'",
        content: `Side by side, we will always stay, <br>Through storm and shine, come what may. <br>In your arms, my world is calm, <br>Forever with you, my heart is warm.`
    },
    // Add more poems here, each poem will generate a new page
];

// Function to generate the poem pages
function generatePages() {
    const bookContainer = document.querySelector('.book-container');
    
    poems.forEach(poem => {
        const page = document.createElement('div');
        page.classList.add('page');
        
        page.innerHTML = `
            <h2 class="poem-title">${poem.title}</h2>
            <p>${poem.content}</p>
        `;
        
        bookContainer.appendChild(page);
    });
}

// Page navigation logic
let currentPage = 0;
const pages = document.querySelectorAll('.page');

function turnPage(direction) {
    pages[currentPage].classList.add('flipped');
    currentPage += direction;

    if (currentPage < 0) currentPage = pages.length - 1;
    if (currentPage >= pages.length) currentPage = 0;

    setTimeout(() => {
        pages[currentPage].classList.remove('flipped');
        pages[currentPage].classList.add('active');
    }, 500); // Delay to allow flip animation to finish
}

// Initialize the book on page load
window.onload = generatePages;

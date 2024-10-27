// let bagItems = []; // Declare bagItems here

// global.js

// Retrieve or initialize bagItems
let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];

// Function to add item to the bag
function addToBag(itemId) {
    // Check if the item is already in the bag
    if (!bagItems.includes(itemId)) {
        bagItems.push(itemId); // Add the item ID to the bag
        localStorage.setItem('bagItems', JSON.stringify(bagItems)); // Save to localStorage
        updateBagItemCount(); // Update the count shown on the bag icon
        alert("Item added to bag!"); // Optional confirmation
    } else {
        alert("Item is already in the bag!");
    }
}

// Function to update the bag item count on all pages
function updateBagItemCount() {
    let bagItemCountElements = document.querySelectorAll('.bag-item-count');

    // Update the count on all elements with the class 'bag-item-count'
    bagItemCountElements.forEach(element => {
        element.textContent = bagItems.length;
        element.style.visibility = bagItems.length > 0 ? 'visible' : 'hidden';
    });
}

// Ensure the count updates on every page load
document.addEventListener('DOMContentLoaded', () => {
    updateBagItemCount();
});





// Function to get item by ID
function getItemById(itemId) {

  const category = itemId.split('_')[0];
const allItems = {
clothes: clothesitems.clothes,
beauty: beautyitems.beauty,
books: booksitems.books,
accessories: accessoriesitems.accessories,
};
if (allItems[category]) {
return allItems[category].find(item => item.id === itemId);
} else {
console.error(`Category ${category} not found.`);
return null;
}
}


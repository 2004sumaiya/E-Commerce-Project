const CONVENIENCE_FEES = 99; // Constant for convenience fees
let bagItemObjects = []; // This will hold the objects of items in the bag

document.addEventListener('DOMContentLoaded', () => {
    // Only run these functions on pages where they're needed
    if (document.querySelector('.bag-items-container') || document.querySelector('.bag-summary')) {
        onLoad(); // Call the onLoad function after the DOM is fully loaded
    }
});

function onLoad() {
    loadBagItemObjects(); // Load items based on IDs in bagItems
    displayBagItems(); // Display items in the bag
    displayBagSummary(); // Display the summary of the bag
}

function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.bag-summary');
    if (!bagSummaryElement) {
        console.warn('Bag summary element not found. Skipping...');
        return; // Exit if the element is not found
    }

    let totalItem = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObjects.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    bagSummaryElement.innerHTML = `
        <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem} Items)</div>
            <div class="price-item">
                <span class="price-item-tag">Total MRP</span>
                <span class="price-item-value">Rs ${totalMRP}</span>
            </div>
            <div class="price-item">
                <span class="price-item-tag">Discount on MRP</span>
                <span class="price-item-value priceDetail-base-discount">-Rs ${totalDiscount}</span>
            </div>
            <div class="price-item">
                <span class="price-item-tag">Convenience Fee</span>
                <span class="price-item-value">Rs ${CONVENIENCE_FEES}</span>
            </div>
            <hr>
            <div class="price-footer">
                <span class="price-item-tag">Total Amount</span>
                <span class="price-item-value">Rs ${finalPayment}</span>
            </div>
        </div>
        <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
        </button>
    `;
}

function loadBagItemObjects() {
    // Assuming 'bagItems' is stored in localStorage
    let bagItemsString = localStorage.getItem('bagItems');
    let bagItems = bagItemsString ? JSON.parse(bagItemsString) : [];

    bagItemObjects = bagItems.map(itemId => {
        const item = getItemById(itemId); // Use the getItemById function to find the item
        return item ? item : null; // Return the item or null if not found
    }).filter(item => item !== null); // Filter out any null values
}

function displayBagItems() {
    const bagContainer = document.querySelector('.bag-items-container'); // Ensure this matches your HTML
    if (!bagContainer) {
        console.warn('Bag container element not found. Skipping...');
        return; // Exit if the element is not found
    }

    bagContainer.innerHTML = ''; // Clear existing items

    if (bagItemObjects.length === 0) {
        bagContainer.innerHTML = '<p>Your bag is empty.</p>'; // Message if no items
        return;
    }

    bagItemObjects.forEach(item => {
        const itemHTML = generateItemHTML(item); // Use the generateItemHTML function
        bagContainer.innerHTML += itemHTML; // Append item to the bag container
    });
}

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



// Function to remove item from bag
function removeFromBag(itemId) {
    let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
    bagItems = bagItems.filter(bagItemId => bagItemId !== itemId); // Use filter to remove the item
    localStorage.setItem('bagItems', JSON.stringify(bagItems)); // Update local storage
    loadBagItemObjects(); // Reload bag item objects
    displayBagItems(); // Refresh displayed items
    displayBagSummary(); // Refresh the summary
}

// Function to generate HTML for a single item
function generateItemHTML(item) {
    return `<div class="bag-item-container">
        <div class="item-left-part">
            <img class="bag-item-img" src="${item.image}">
        </div>
        <div class="item-right-part">
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
            </div>
            <div class="return-period">
                <span class="return-period-days">${item.return_period}</span> return available
            </div>
            <div class="delivery-details">
                Delivery by <span class="delivery-details-days">${item.delivery_date}</span>
            </div>
        </div>
        <div class="remove-from-cart" onclick='removeFromBag("${item.id}")'>X</div>
    </div>`;
}

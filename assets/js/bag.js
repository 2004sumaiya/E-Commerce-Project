const CONVENIENCE_FEES = 99;
let bagItemObjects = [];

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.bag-items-container') || document.querySelector('.bag-summary')) {
        onLoad();
    }
});

function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.bag-summary');
    if (!bagSummaryElement) {
        console.warn('Bag summary element not found. Skipping...');
        return;
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
        <button class="btn-place-order">PLACE ORDER</button>
    `;
}

function loadBagItemObjects() {
    let bagItemsString = localStorage.getItem('bagItems');
    let bagItems = bagItemsString ? JSON.parse(bagItemsString) : [];
    bagItemObjects = bagItems.map(itemId => {
        const item = getItemById(itemId);
        return item ? item : null;
    }).filter(item => item !== null);
}

function displayBagItems() {
    const bagContainer = document.querySelector('.bag-items-container');
    if (!bagContainer) {
        console.warn('Bag container element not found. Skipping...');
        return;
    }
    bagContainer.innerHTML = '';
    if (bagItemObjects.length === 0) {
        bagContainer.innerHTML = '<p>Your bag is empty.</p>';
        return;
    }
    bagItemObjects.forEach(item => {
        const itemHTML = generateItemHTML(item);
        bagContainer.innerHTML += itemHTML;
    });
}
function getItemById(itemId) {
    // Check if itemId is an object and retrieve the string ID correctly
    if (typeof itemId === 'object' && itemId !== null && itemId.id) {
        itemId = itemId.id; // Assuming the object has an 'id' property
    } else if (typeof itemId !== 'string') {
        console.error(`Expected itemId to be a string, but got ${typeof itemId}`);
        return null;
    }

    const category = itemId.split('_')[0]; // Safe to use split now
    const allItems = {
        clothes: clothes,
        beauty: beauty,
        books: books,
        accessories: accessories
    };

    if (allItems[category]) {
        const item = allItems[category].find(item => item.id === itemId);
        if (!item) {
            console.error(`Item not found for ID: ${itemId}`);
        }
        return item;
    } else {
        console.error(`Category ${category} not found for item ID: ${itemId}`);
        return null;
    }
}




// console.log(`Fetching item for ID: ${itemId}`);
// const item = allItems[category].find(item => item.id === itemId);
// if (!item) {
//     console.error(`Item not found for ID: ${itemId}`);
// }
// return item;










function removeFromBag(itemId) {
    let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
    bagItems = bagItems.filter(bagItemId => bagItemId !== itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

function generateItemHTML(item) {
    return `<div class="bag-item-container">
        <div class="item-left-part">
            <img class="bag-item-img" src="${item.image}" alt="${item.item_name}">
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
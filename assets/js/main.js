// main.js

document.addEventListener('DOMContentLoaded', () => {
  onLoad();
});

function onLoad() {
  // Only call displayItemsOnHomePage if .items_container is present
  if (document.querySelector('.items_container')) {
      displayItemsOnShopPage();
  }
}

function displayItemsOnShopPage() {
  let itemsContainerElement = document.querySelector('.items_container');
  
  if (!itemsContainerElement) {
      console.error('Items container element not found');
      return; // Exit if the element is not found
  }

  if (typeof items === 'undefined') {
      console.error('Items data not found');
      return; // Exit if items is not defined
  }

  let innerHTML = '';
  items.forEach(item => {
      innerHTML += `
          <div class="item_container">
              <img src="${item.image}" alt="${item.item_name}" class="item_image">
              <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
              <div class="company_name">${item.company}</div>
              <div class="item_name">${item.item_name}</div>
              <div class="price">
                  <span class="current_price">Rs.${item.current_price}</span>
                  <span class="original_price">Rs.${item.original_price}</span>
                  <span class="discount">(${item.discount_percentage}% OFF)</span>
              </div>
              <button class="add_to_bag_btn" onclick="addToBag('${item.id}')">Add to Bag</button>
          </div>
      `;
  });

  itemsContainerElement.innerHTML = innerHTML;
}

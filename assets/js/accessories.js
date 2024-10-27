
const accessoriesitems = {
    accessories: [
      {
        id: ' accessories_001',
        image: './assets/images/products/accessories/1.jpeg',
        company: 'Carlton London',
        item_name: 'claw clips_',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: 'accessories_002',
        image: './assets/images/products/accessories/2.jpeg',
        company: 'CUKOO',
        item_name: 'Jewelry',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: 'accessories_003',
        image: './assets/images/products/accessories/3.jpeg',
        company: 'NUEVOSDAMAS',
        item_name: 'Meghan Markle Made These Bags So Popular, They Just Wont Stay in Stock',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: 'accessories_004',
        image: './assets/images/products/accessories/4.jpeg',
        company: 'ADIDAS',
        item_name: 'Ring Trends_ Modern Engagement Ring Ideas 2024',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: 'accessories_005',
        image: './assets/images/products/accessories/5.jpeg',
        company: 'Roadster',
        item_name: 'Rings',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: 'accessories_006',
        image: './assets/images/products/accessories/6.jpeg',
        company: 'Nike',
        item_name: 'Yalice Rhinestone Finger Bracelet Ring Black Crystal Hand Chains Flower Slave Finger Chain Fashion Charm Hand Jewelry for Women and Girls ',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
    }
    
  
    ] 
  };
  
  // Function to display clothes items
  function displayAccessories() {
    //   const container = document.getElementById('item-container');
      
    //   // Clear the container before adding items (optional, in case of re-rendering)
    //   container.innerHTML = '';
    const container = document.getElementById('item-container');
    if (container) {
      container.innerHTML = ''; // or any other operation
    } else {
      console.error('Element with id "item-container" not found.');
    }
  
      accessoriesitems.accessories.forEach(item => {
          // Create the HTML string for each item
          const itemHTML = `
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
          
          // Append the item HTML to the container
          container.innerHTML += itemHTML;
      });
  }
  
  // Call the function to display items
  displayAccessories();
  
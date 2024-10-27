const clothesitems = {
    clothes: [
        {
            id: 'clothes_001',
            image: './assets/images/products/clothes/1.jpeg',
            company: 'Carlton London',
            item_name: 'Floral Arabian Gown',
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
            id: 'clothes_002',
            image: './assets/images/products/clothes/2.jpeg',
            company: 'CUKOO',
            item_name: 'Women Floral Print Mandarin Collar Short Sleeves Fit and Flare Midi Dress',
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
            id: 'clothes_003',
            image: './assets/images/products/clothes/3.jpeg',
            company: 'NUEVOSDAMAS',
            item_name: 'Women Red & White Printed A-Line Knee-Length kurta',
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
            id: 'clothes_004',
            image: './assets/images/products/clothes/4.jpeg',
            company: 'ADIDAS',
            item_name: 'Floral white frock',
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
            id: 'clothes_005',
            image: './assets/images/products/clothes/5.jpeg',
            company: 'Roadster',
            item_name: 'Pure Cotton suit',
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
            id: 'clothes_006',
            image: './assets/images/products/clothes/6.jpeg',
            company: 'Nike',
            item_name: 'Cotton trendy frock with jeans ',
            original_price: 14995,
            current_price: 14995,
            discount_percentage: 0,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 0.0,
                count: 0,
            },
        },
        {
            id: 'clothes_007',
            image: './assets/images/products/clothes/7.jpeg',
            company: 'The Indian Garage Co',
            item_name: 'women wedding function suit',
            original_price: 1599,
            current_price: 639,
            discount_percentage: 60,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.2,
                count: 388,
            },
        },
        {
            id: 'clothes_008',
            image: './assets/images/products/clothes/8.jpeg',
            company: 'Nivea',
            item_name: ' Yellow floral long frock',
            original_price: 285,
            current_price: 142,
            discount_percentage: 50,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.2,
                count: 5200,
            },
        },
        {
            id: 'clothes_009',
            image: './assets/images/products/clothes/9.jpeg',
            company: 'The Indian Garage Co',
            item_name: 'Beautiful bluish knee length top embroidry',
            original_price: 1599,
            current_price: 639,
            discount_percentage: 60,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.2,
                count: 388,
            },
        },
        {
            id: 'clothes_0010',
            image: './assets/images/products/clothes/10.jpeg',
            company: 'Nivea',
            item_name: 'Long frock summer',
            original_price: 285,
            current_price: 142,
            discount_percentage: 50,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.2,
                count: 5200,
            },
        },
        {
            id: 'clothes_0011',
            image: './assets/images/products/clothes/11.jpeg',
            company: 'Nivea',
            item_name: 'Cotton long top with coat floral',
            original_price: 285,
            current_price: 142,
            discount_percentage: 50,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.2,
                count: 5200,
            },
        },
        {
            id: 'clothes_0012',
            image: './assets/images/products/clothes/12.jpeg',
            company: 'Nivea',
            item_name: 'Bridal Floral gown',
            original_price: 285,
            current_price: 142,
            discount_percentage: 50,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.2,
                count: 5200,
            },
        }

        // ... more items
    ]
};



  // Function to display clothes items
  function displayClothes() {
    //   const container = document.getElementById('item-container');
      
    //   // Clear the container before adding items (optional, in case of re-rendering)
    //   container.innerHTML = '';
      const container = document.getElementById('item-container');
      if (container) {
        container.innerHTML = ''; // or any other operation
      } else {
        console.error('Element with id "item-container" not found.');
      }
  
      clothesitems.clothes.forEach(item => {
          // Create the HTML string for each item
          const itemHTML = `
              <div class="item_container">
                  <img src="${item.image}" alt="${item.item_name}" class="item_image">
                  <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
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
  displayClothes();
  


// document.addEventListener("DOMContentLoaded", function() {
//     // Your code to display items
    

// });


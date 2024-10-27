
const booksitems = {
    books : [
      {
        id: 'book_001',
        image: './assets/images/products/books/1.jpg',
        item_name: 'The sealed Nector',
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
        id: 'book_002',
        image: './assets/images/products/books/2.jpeg',
        item_name: 'Khadija (R.A)',
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
        id: 'book_003',
        image: './assets/images/products/books/3.jpeg',
        item_name: 'I am Near',
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
        id: 'book_004',
        image: './assets/images/products/books/4.jpeg',
        item_name: 'Healing with the MEDICINE of the PROPHET By Ibn Qayyim Al-Jauziyah_ Medical book',
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
        id: 'book_005',
        image: './assets/images/products/books/5.jpeg',
        item_name: 'Read “You can be the happiest woman in the world” here ⬅️ Islamic book for muslimahs',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    }
  ]
  };
  
  // Function to display clothes items
  function displayBooks() {
    //   const container = document.getElementById('item-container');
      
    //   // Clear the container before adding items (optional, in case of re-rendering)
    //   container.innerHTML = '';
      const container = document.getElementById('item-container');
      if (container) {
        container.innerHTML = ''; // or any other operation
      } else {
        console.error('Element with id "item-container" not found.');
      }
  
      booksitems.books.forEach(item => {
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
  displayBooks();
  


// document.addEventListener("DOMContentLoaded", function() {
//     // Your code to display items
    

// });

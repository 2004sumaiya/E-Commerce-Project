
const books = [
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
];


    
// Function to render books on books.html
function displayBooks() {
    const booksContainer = document.querySelector('#item-container');
  
    books.forEach(item => {
      const productElement = document.createElement('div');
      productElement.classList.add('item');
      productElement.innerHTML = `
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
      booksContainer.appendChild(productElement);
    });
  }
  
  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', displayBooks);


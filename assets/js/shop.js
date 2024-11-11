
const items = [
  {
              id: '001',
              image: 'assets/images/collection/1.jpeg',
              company: 'Carlton London',
              item_name: 'Rhodium-Plated CZ Floral Studs',
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
              id: '002',
              image: 'assets/images/collection/2.jpeg',
              company: 'CUKOO',
              item_name: 'Women Padded Halter Neck Swimming Dress',
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
              id: '003',
              image: 'assets/images/collection/3.jpeg',
              company: 'NUEVOSDAMAS',
              item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
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
              id: '004',
              image: 'assets/images/collection/4.jpeg',
              company: 'ADIDAS',
              item_name: 'Indian Cricket ODI Jersey',
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
              id: '005',
              image: 'assets/images/collection/5.jpeg',
              company: 'Roadster',
              item_name: 'Pure Cotton T-shirt',
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
              id: '006',
              image: 'assets/images/collection/6.jpeg',
              company: 'Nike',
              item_name: 'Men ReactX Running Shoes',
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
              id: '007',
              image: 'assets/images/collection/7.jpeg',
              company: 'The Indian Garage Co',
              item_name: 'Men Slim Fit Regular Shorts',
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
              id: '008',
              image: 'assets/images/collection/8.jpeg',
              company: 'Nivea',
              item_name: 'Men Fresh Deodrant 150ml',
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
            id: '009',
            image: 'assets/images/collection/9.jpeg',
            company: 'The Indian Garage Co',
            item_name: 'Men Slim Fit Regular Shorts',
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
            id: '0010',
            image: 'assets/images/collection/10.jpeg',
            company: 'Nivea',
            item_name: 'Men Fresh Deodrant 150ml',
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
            id: '0011',
            image: 'assets/images/collection/11.jpeg',
            company: 'Nivea',
            item_name: 'Men Fresh Deodrant 150ml',
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
      
      
      
];



  
// Function to render items on shop.html
function displayItems() {
  const itemsContainer = document.querySelector('#item-container');

  items.forEach(item => {
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
    itemsContainer.appendChild(productElement);
  });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displayItems);


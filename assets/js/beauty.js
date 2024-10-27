
const beautyitems = {
    beauty: [
      {
        id: 'beauty_001',
        image: './assets/images/products/beauty/1.jpeg',
        company: 'Carlton London',
        item_name: '$6 BUY HERE Vaseline Lip Therapy Rosy Balm Tube',
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
        id: 'beauty_002',
        image: './assets/images/products/beauty/2.jpeg',
        company: 'CUKOO',
        item_name: 'Beauty Products',
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
        id: 'beauty_003',
        image: './assets/images/products/beauty/3.jpeg',
        company: 'NUEVOSDAMAS',
        item_name: 'DOVE DEODORANT _ PERFUME BOTTLE _ SCENT',
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
        id: 'beauty_004',
        image: './assets/images/products/beauty/4.jpeg',
        company: 'ADIDAS',
        item_name: 'Nivea Soft Moisturizer',
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
        id: 'beauty_005',
        image: './assets/images/products/beauty/5.jpeg',
        company: 'Roadster',
        item_name: 'rosy lips vaseline',
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
        id: 'beauty_006',
        image: './assets/images/products/beauty/6.jpeg',
        company: 'Nike',
        item_name: 'Kiuxbfg Soft Eyeliner Gel Pen Reclining Silkworm Pen Thin Tip Waterproof Non Stain Brightening Natural Soft Glue Eyeliner, Brown ',
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
        id: 'beauty_007',
        image: './assets/images/products/beauty/7.jpeg',
        company: 'The Indian Garage Co',
        item_name: 'Nivea beauty and pearl deodorant',
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
        id: 'beauty_008',
        image: './assets/images/products/beauty/8.jpeg',
        company: 'Nivea',
        item_name: ' Soft Matte Lip Cream, High-Pigmented Cream Lipstick',
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
      id: 'beauty_009',
      image: './assets/images/products/beauty/9.jpeg',
      company: 'The Indian Garage Co',
      item_name: 'The 12 Best Dupes For Dior’s Viral Lip Glow Oil',
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
      id: 'beauty_0010',
      image: './assets/images/products/beauty/10.jpeg',
      company: 'Nivea',
      item_name: 'The Biggest Beauty Product Trend of 2019 Is Almost Good Enough to Eat',
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
  
    ] 
  };
  
  // Function to display beauty items
  function displayBeauty() {
    //   const container = document.getElementById('item-container');
      
    //   // Clear the container before adding items (optional, in case of re-rendering)
    //   container.innerHTML = '';
    const container = document.getElementById('item-container');
    if (container) {
      container.innerHTML = ''; // or any other operation
    } else {
      console.error('Element with id "item-container" not found.');
    }
  
      beautyitems.beauty.forEach(item => {
          // Create the HTML string for each item
          const itemHTML = `
              <div class="item">
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
  displayBeauty();
  
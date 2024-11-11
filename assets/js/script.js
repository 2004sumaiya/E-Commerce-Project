document.addEventListener('DOMContentLoaded', () => {
  updateBagCount();
  document.querySelectorAll('.add-to-bag-btn').forEach(button => {
      button.addEventListener('click', (event) => {
          const itemId = event.target.getAttribute('data-item-id');
          addToBag(itemId);
      });
  });
});

function addToBag(itemId) {
  let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
  if (!bagItems.includes(itemId)) {
      bagItems.push(itemId);
      localStorage.setItem('bagItems', JSON.stringify(bagItems));
      alert("Item added to bag!");
  } else {
      alert("Item is already in the bag!");
  }
  updateBagCount();
}

function updateBagCount() {
  const bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
  const count = bagItems.length;
  document.querySelector('.bag-item-count').innerHTML = count;
}


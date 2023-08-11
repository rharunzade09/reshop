let searchButton = document.querySelector('.search-button');

function applyDiscount() {
  let searchValue = document.querySelector('.search-baring').value.toUpperCase();
  let productPrices = document.querySelectorAll('.product-price');
  
  if (searchValue === 'FRONTEND') {
    productPrices.forEach(priceElement => {
      let originalPrice = parseFloat(priceElement.innerText);
      let discountedPrice = originalPrice * 0.9;
      priceElement.innerText = discountedPrice.toFixed(2); // Обновляем отображаемую цену
    });
    alert('Поздравляем! На все товары скидка 10%!');
  } else {
    alert('Скидка не применена. Попробуйте позже.');
  }
}

searchButton.addEventListener('click', applyDiscount);

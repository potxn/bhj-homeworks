const products = [...document.querySelectorAll('.product')];
const productsQtyControl = [...document.querySelectorAll('.product__quantity-control')];
const productsValue = document.querySelectorAll('.product__quantity-value');
const productsInCart = document.getElementsByClassName('cart__products');
const productAddToCart = document.querySelectorAll('.product__add');


productsQtyControl.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        if (item.classList.contains('product__quantity-control_inc')) {
        
          item.parentElement.querySelector('.product__quantity-value').innerText =(Number(item.parentElement.querySelector('.product__quantity-value').innerText)+ 1);
        }
        if (item.classList.contains('product__quantity-control_dec') && item.parentElement.querySelector('.product__quantity-value').innerText > 1) {
            item.parentElement.querySelector('.product__quantity-value').innerText =(Number(item.parentElement.querySelector('.product__quantity-value').innerText)- 1);

        }
    })
});

productAddToCart.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        let qty = item.parentElement.parentElement.querySelector('.product__quantity-value').innerText;
        let productImage = item.parentElement.parentElement.parentElement.querySelector('.product__image').currentSrc;
        let productId = item.parentElement.parentElement.parentElement.dataset.id;
        let productInCartList=[... productsInCart[0].children];

        let productsInsideCart = [...productInCartList].find( element => element.dataset.id === productId);

        if (productsInsideCart) {
            productsInsideCart.querySelector('.cart__product-count').innerText = Number(productsInsideCart.querySelector('.cart__product-count').innerText) + Number(qty);

        }
        else {
            productsInCart[0].insertAdjacentHTML('afterbegin', `
                <div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${productImage}">
                    <div class="cart__product-count">
                    ${qty}
                    </div>
                </div>
            `);   
        }
    })    
});
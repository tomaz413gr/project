const basket = document.querySelector(".basket_content");

window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".cont");
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-image").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itensInBox: card.querySelector("[data-itens-in-box]").innerText,
      weight: card.querySelector(".price_weight").innerText,
      price: card.querySelector(".price_currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };
    const itemBasket = basket.querySelector(`[data-id="${productInfo.id}"]`);
    console.log(itemBasket);
    if (itemBasket) {
      const dataCounter = itemBasket.querySelector("[data-counter]");
      dataCounter.innerText =
        parseInt(dataCounter.innerText) + parseInt(productInfo.counter);
    } else {
      const cartItemHtml = `<div class="basket" data-id="${productInfo.id}">
        <div class="item_img"><img src=${productInfo.imgSrc} alt="">></div>
        <div class="item_info">
            <h5>${productInfo.title}</h5>
            <span>${productInfo.itensInBox}/</span><span>${productInfo.weight}.</span>
            <div class="quantity_basket">
                <div class="minus quantity_size" data-action="minus">-</div>
                <div class="numb quantity_size" data-counter>1</div>
                <div class="plus quantity_size" data-action="plus">+</div>
                <div class="price_item">${productInfo.price}.</div>
            </div>
        </div>
    </div>`;
      basket.insertAdjacentHTML("beforeend", cartItemHtml);
    }
  }
});

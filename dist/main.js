const menuActive = document.querySelector('.menu-mobile');
const navigationOn = document.querySelector('.navigation-mobile');

menuActive.addEventListener("click", () =>{
  navigationOn.classList.toggle('menu-mobile-active');
});

const Methods = {
  init() {
    Methods.getProducts();
    Methods.sliders();
  },

  getProducts() {
    const mainShelf = document.querySelector('.list-product-sellers');
    for (let i = 1; i < 8; i++) {
      let productItem = `
        <li data-item="${shoesJson.shoes[i].id}">
          <div class="product-img">
            <img src="/img/${shoesJson.shoes[i].image}" />
          </div>
          <div class="product-description">
            <p>${shoesJson.shoes[i].name}</p>
            <p>R$ ${shoesJson.shoes[i].price}</p>
            <p>${shoesJson.shoes[i].portion}X <span>de</span> ${shoesJson.shoes[i].in}</p>
          </div>
          <button class="btn-buy">Comprar </button>
        </li>
        `;
      mainShelf.innerHTML += productItem;
    }
  },

  sliders() {
    $('.list-product-sellers').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    $('.follow-us ul').slick({
      arrows: false,
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 5,
      autoplaySpeed: 1000,
      speed: 1000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
    if(window.innerWidth < 768){
      $('.band').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        autoplaySpeed: 1000,
        speed: 3000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })
  } 
}
}

document.addEventListener("DOMContentLoaded", () => {
  Methods.init();
});
var swiper = new Swiper(".mySwiper", {
  autoplay: {
      delay: 3500,
      stopOnLastSlide: true,
  },
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});



const btn = document.querySelector('.close');

btn.addEventListener('click', () =>{
    document.querySelector('.swiper').classList.toggle('none');

    if(btn.dataset.trigger == 'false'){
        btn.innerText = 'Назад';
        btn.dataset.trigger = true;
    } else {
        btn.innerText = btn.dataset.text;
        btn.dataset.trigger = false;
    }
})

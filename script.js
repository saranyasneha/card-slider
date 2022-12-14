var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    
    grabCursor: true,
    speed: 700,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
  });
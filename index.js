const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    //分頁按鈕可點擊（pagination clickable）
    clickable: true
  },
  grid: {
    // //手機版時，Swiper 排版為 3 列，頁面寬度 >= 768px 時，排版為 1 列（grid rows）
    rows: 3,
  },
  breakpoints: {
    //頁面寬度 >= 768px 時，（breakpoints）
    768: {      
      grid: {
        rows: 1,
      },
      //Swiper 一次可以看到三個 swiper-slide（slidesPerView）
      slidesPerView: 3,
      //swiper-slide 左右間距為 24px（spaceBetween）
      spaceBetween: 24,
    }
  }
});


  $(document).ready(function(e){
    $("button").click(function(e){
      $(".menu-icon").toggleClass("close");
      $(".fa-xmark").toggleClass("close");
      $(".navbar-list").toggleClass("menu-close");
    })
})



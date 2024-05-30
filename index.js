var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  $(document).ready(function(e){
    $("button").click(function(e){
      $(".menu-icon").toggleClass("close");
      $(".fa-xmark").toggleClass("close");
      $(".navbar-list").toggleClass("menu-close");
    })
})
$(function () {

   let searching = document.querySelector(`.mobile_searching`);
   let searchBody = document.querySelector(`#mobile`);

   searching.addEventListener('click', function () {

      searchBody.classList.add('mobile_search_active');
   });

   let cross = document.querySelector('.close');

   cross.addEventListener('click', function () {

      searchBody.classList.remove('mobile_search_active');
   });

   //BANNER STARTS

   $('.parent_slider').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: `<span class="right"><iconify-icon icon="solar:arrow-right-linear" width="24" height="24"></iconify-icon></span>`,
      prevArrow: `<span class="left"><iconify-icon icon="solar:arrow-left-linear" width="24" height="24"></iconify-icon></span>`,
   });

   // BANNER ENDS

   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
   const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

   const buttons = document.querySelectorAll('.category-button');
   const items = document.querySelectorAll('.boxes');

   $('#getting-started')
   .countdown("2025/10/6", function (event) {
      $('.sec').html(event.strftime('%S'));
      $('.min').html(event.strftime('%M'));
      $('.hour').html(event.strftime('%H'));
      $('.day').html(event.strftime('%D'));

   });

   let close = document.querySelector(`.klose`)
   let news = document.querySelector("#news")

   window.addEventListener("load", function () {
      setTimeout(() => {
         news.classList.add("active");
      }, "2000");
   });

   close.addEventListener("click", function () {
      news.classList.remove("active");
   });


   $('.category-button').categoryFilter();

   // PRODUCT DETIALS


   $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',

   });
   $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      vertical: true,
      centerMode: false,
      prevArrow: `<span class="up"><iconify-icon icon="ep:arrow-up" width="24" height="24"></iconify-icon></span>`,
      nextArrow: `<span class="down"><iconify-icon icon="ep:arrow-down" width="24" height="24"></iconify-icon></span>`,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               dots: false,
               vertical: false,
               nextArrow: false,
               prevArrow: false,
            }
         },
      ]
   });

   $(function () {
      $(".example").imagezoomsl();
   });

   $('.venobox').venobox({
     
   });



})





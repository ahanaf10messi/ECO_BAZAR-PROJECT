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

   let close = document.querySelector(`.klose`)
   let news = document.querySelector("#news")

   window.addEventListener("load", function () {
      setTimeout(() => {
         news.classList.add("active");
      }, "2000")
   });

   close.addEventListener("click", function () {
      news.classList.remove("active");
   });


});

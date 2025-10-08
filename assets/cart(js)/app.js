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

   // AMOUNT PART STARTS 

   let increment = document.querySelector('.inc');
   let decrement = document.querySelector('.dec');
   let result = document.querySelector('.result');

   increment.addEventListener("click", function () {
      if (result.value >= 10) {
         increment.style.cursor = "not-allowed"
      } else {
         result.value++;
         increment.style.cursor = "pointer"
      }
   })

   decrement.addEventListener("click", function () {
      if (result.value <= 1) {
         decrement.style.cursor = "not-allowed"
      } else {
         result.value--;
         decrement.style.cursor = "pointer"
      }
   })

   result.addEventListener("keyup", function () {
      if (result.value <= 10) {
         result.value = "10"
      } else if (result.value >=1){
         result.value = "1"
      }
   })

   let increments = document.querySelector('.incs');
   let decrements = document.querySelector('.decs');
   let results = document.querySelector('.results');

   increments.addEventListener("click", function () {
      if (results.value >= 10) {
         increments.style.cursor = "not-allowed"
      } else {
         results.value++;
         increments.style.cursor = "pointer"
      }
   })

   decrements.addEventListener("click", function () {
      if (results.value <= 1) {
         decrements.style.cursor = "not-allowed"
      } else {
         results.value--;
         decrements.style.cursor = "pointer"
      }
   })

   results.addEventListener("keyup", function () {
      if (results.value <= 10) {
         results.value = "10"
      } else if (results.value >=1){
         results.value = "1"
      }
   })


})

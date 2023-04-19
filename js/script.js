var count = 0;
readmore.addEventListener('click', function (e) {
   e.preventDefault();
   logos.classList.toggle('open-content--show');
   readmore.classList.toggle('read-more-rotate');
   count++;
   if (count % 2 === 1) {
      readmore.innerHTML = "Скрыть";
   }
   else {
      readmore.innerHTML = "Показать всё";
   }
});
new Swiper('.logos-swiper', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   }
});
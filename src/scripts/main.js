document.addEventListener('DOMContentLoaded', () => {
	console.log('Hello, world!')
	// const removeLoader = () => {
	// 	document.querySelector('body').classList.remove("loading");
	// 	document.querySelector('.preloader').classList.add('preloader_hide');
	// }
	//
	// setTimeout(removeLoader, 1000);

  // При скролле
  // window.addEventListener('scroll', () => showHideArrows())

  // Возврат наверх
  // document.querySelector(".return-to-top").addEventListener("click", (event) => {
	//   event.preventDefault();
  //   $("html, body").animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     1000
  //   );
  // });

  // =============================== Слайдер ==============================
  // Массив из адресов картинок
  // let images = [
  //   "images/slider/image-1.png",
  //   "images/slider/image-2.png",
  //   "images/slider/image-3.png",
  //   "images/slider/image-4.png",
  //   "images/slider/image-5.png",
  // ];

  // Текущая картинка
  // let curr_img = 0;
	//
  // let slider = $(".slider__img");
  // let prev_btn = $(".slider__btn_dir-prev");
  // let next_btn = $(".slider__btn_dir-next");

  // Начальная блокировка кнопки предыдущей картинки слайдера
  // prev_btn.prop("disabled", true);
  // prev_btn.on("click", function () {
  //   curr_img--;
  //   if (curr_img <= 0) {
  //     prev_btn.prop("disabled", true);
  //   } else {
  //     prev_btn.prop("disabled", false);
  //   }
  //   slider.prop("src", images[curr_img]);
  //   next_btn.prop("disabled", false);
  // });
	//
  // next_btn.on("click", function () {
  //   curr_img++;
  //   if (curr_img >= images.length - 1) {
  //     next_btn.prop("disabled", true);
  //   } else {
  //     next_btn.prop("disabled", false);
  //   }
  //   slider.prop("src", images[curr_img]);
  //   prev_btn.prop("disabled", false);
  // });
});

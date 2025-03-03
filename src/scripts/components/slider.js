import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

new Swiper('#slider', {
	modules: [Pagination],

	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,

	pagination: {
		el: '.slider__pagination',
		clickable: true,
	},
});

/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// if (document.querySelector('.hero__slider')) { 
	// 	new Swiper('.hero__slider', { 
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: "auto",
	// 		speed: 500,

	// 		breakpoints: {
	// 			300: {
	// 				spaceBetween: 10,
	// 			},
	// 			480: {
	// 				spaceBetween: 20,
	// 			},
	// 		},
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }

	let heroSliderInstance;

	function setupHeroSlider() {
			const mediaQuery = window.matchMedia("(min-width: 30.061em)"); // Проверяем ширину экрана
			const heroSliderElement = document.querySelector('.hero__slider');

			if (!heroSliderElement) return;

			if (mediaQuery.matches) {
					// Если ширина экрана >= 30.061em
					if (!heroSliderInstance) {
							heroSliderInstance = new Swiper('.hero__slider', {
									modules: [Navigation],
									observer: true,
									observeParents: true,
									slidesPerView: "auto",
									speed: 500,
									breakpoints: {
											300: {
													spaceBetween: 10,
											},
											480: {
													spaceBetween: 20,
											},
									},
							});
					}
			} else {
					// Если ширина экрана < 30.061em
					if (heroSliderInstance) {
							heroSliderInstance.destroy(true, true);
							heroSliderInstance = null;

							// Удаляем классы swiper для возврата к обычным блокам
							heroSliderElement.classList.remove('swiper-initialized', 'swiper-horizontal');
							const slides = heroSliderElement.querySelectorAll('.swiper-slide');
							slides.forEach(slide => {
									slide.style.width = '';
							});
					}
			}
	}

	// Запуск на загрузке
	setupHeroSlider();

	// Перезапуск при изменении размера экрана
	window.addEventListener('resize', setupHeroSlider);

	if (document.querySelector('.cases__slider')) { 
		new Swiper('.cases__slider', { 
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			speed: 500,

			breakpoints: {
				300: {
					spaceBetween: 10,
					slidesPerView: 1.05,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1200: {
					spaceBetween: 20,
				},
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.cards-a__slider')) { 
		new Swiper('.cards-a__slider', { 
			modules: [Navigation],
			observer: true,
			observeParents: true,
			speed: 500,
			
			breakpoints: {
				300: {
					spaceBetween: 10,
					slidesPerView: 1.05,
				},
				480: {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				600: {
					spaceBetween: 10,
					slidesPerView: 3.05,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 18,
				},
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.cards-b__slider')) { 
		new Swiper('.cards-b__slider', { 
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 500,

			breakpoints: {
				300: {
					spaceBetween: 10,
				},
				768: {
					spaceBetween: 20,
				},
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.more-servs__slider')) { 
		new Swiper('.more-servs__slider', { 
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 500,

			breakpoints: {
				300: {
					spaceBetween: 10,
				},
				768: {
					spaceBetween: 20,
				},
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.any-number__slider')) { 
		new Swiper('.any-number__slider', { 
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 500,

			breakpoints: {
				300: {
					spaceBetween: 10,
				},
				768: {
					spaceBetween: 20,
				},
			},
			// Події
			on: {

			}
		});
	}
	// if (document.querySelector('.swiper')) { 
	// 	new Swiper('.swiper', { 
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		//autoHeight: true,
	// 		speed: 800,

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }
}


window.addEventListener("load", function (e) {
	initSliders();
});
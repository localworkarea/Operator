// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import SplitType from 'split-type'
// DARK/LIGHT THEME =======================================================
window.addEventListener("load", windowLoad);
function windowLoad() {
	// HTML
	const htmlBlock = document.documentElement;

	// Отримуємо збережену тему
	const saveUserTheme = localStorage.getItem('user-theme');

	// Робота з системними налаштуваннями
	let userTheme;
	if (window.matchMedia) {
		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
		!saveUserTheme ? changeTheme() : null;
	});

	// Зміна теми по кліку
	const themeButton = document.querySelector('.menu__mode');
	// const resetButton = document.querySelector('.page__reset');
	if (themeButton) {
		themeButton.addEventListener("click", function (e) {
			// resetButton.classList.add('active');
			changeTheme(true);
		});
	}
	// if (resetButton) {
	// 	resetButton.addEventListener("click", function (e) {
	// 		resetButton.classList.remove('active');
	// 		localStorage.setItem('user-theme', '');
	// 	});
	// }

	// Функція додавання класу теми
	function setThemeClass() {
		if (saveUserTheme) {
			htmlBlock.classList.add(saveUserTheme)
			// resetButton.classList.add('active');
		} else {
			htmlBlock.classList.add(userTheme);
		}
	}
	// Додаємо клас теми
	setThemeClass();

	// Функція зміни теми
	function changeTheme(saveTheme = false) {
		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
		let newTheme;

		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = 'light';
		}
		htmlBlock.classList.remove(currentTheme);
		htmlBlock.classList.add(newTheme);
		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}
}
// ========================================================================

// gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
  
  // == SPLIT TYPE =========================================================
  const splitTextLines = document.querySelectorAll('.split-lines');
  const splitTextWords = document.querySelectorAll('.split-words');
  const splitTextChars = document.querySelectorAll('.split-chars');
  const splitTextBoth = document.querySelectorAll('.split-both');
  const splitSetSpan = document.querySelectorAll('.split-words.set-span');
  
  function initSplitType() {
    // Если существуют элементы с классом .split-lines
    if (splitTextLines.length > 0) {
      splitTextLines.forEach(element => {
        new SplitType(element, { types: 'lines' });
      });
    }
  
    // Если существуют элементы с классом .split-words
    if (splitTextWords.length > 0) {
      splitTextWords.forEach(element => {
        new SplitType(element, { types: 'words' });
        // Проставляем индексы для всех слов
        const words = element.querySelectorAll('.word');
        words.forEach((word, index) => {
          word.style.setProperty('--index', index);
        });
      });
    }
  
    // Если существуют элементы с классом .split-chars
    if (splitTextChars.length > 0) {
      splitTextChars.forEach(element => {
        new SplitType(element, { types: 'chars' });
        const chars = element.querySelectorAll('.char');
        chars.forEach((char, index) => {
          char.style.setProperty('--index', index);
        });
      });
    }
  
    // Если существуют элементы с классом .split-both
    if (splitTextBoth.length > 0) {
      splitTextBoth.forEach(element => {
        new SplitType(element, { types: 'lines, words' });
        // Проставляем индексы для всех слов
        const words = element.querySelectorAll('.word');
        words.forEach((word, index) => {
          word.style.setProperty('--index', index);
        });
      });
    }
    // Добавляем <span> для каждого слова внутри .split-words.set-span
    if (splitSetSpan.length > 0) {
      splitSetSpan.forEach(splitSetSpan => {
        const words = splitSetSpan.querySelectorAll('.word');
        
        words.forEach(word => {
          const text = word.textContent.trim();
          word.innerHTML = `<span class="word-span">${text}</span>`;
        });
      });
    }
  }
  
  initSplitType();
  // =======================================================================


  // == HEADER ===============================================
  const mediaQueryHeader = window.matchMedia("(min-width: 81.311em)");
  const menuLogic = () => {

    if (mediaQueryHeader.matches) {
      const menuItems = document.querySelectorAll(".menu__item.sub-menu");
      menuItems.forEach((menuItem) => {
        const menuLink = menuItem.querySelector(".menu__link");
  
        // Предотвращаем переход по ссылке
        menuLink.addEventListener("click", (e) => {
          e.preventDefault();
        });
  
        if (isMobile.any()) {
          menuLink.addEventListener("click", () => {
            if (menuItem.classList.contains("_show-sub-menu")) {
              menuItem.classList.remove("_show-sub-menu");
            } else {
              menuItem.classList.add("_show-sub-menu");
            }
          });
  
          document.addEventListener("click", (e) => {
            if (!menuItem.contains(e.target)) {
              menuItem.classList.remove("_show-sub-menu");
            }
          });
        } else {
          menuItem.addEventListener("mouseenter", () => {
            menuItem.classList.add("_show-sub-menu");
          });
  
          menuItem.addEventListener("mouseleave", () => {
            menuItem.classList.remove("_show-sub-menu");
          });
        }
      });
    }
  };
  menuLogic();
  mediaQueryHeader.addEventListener("change", menuLogic);

  // =========================================================
  

  // == ANIMATION TITLE ==========================================================

  // == ПЕРЕНЕС В FUNCTION.JS 


  // function titleAnimation() {
  //   ScrollTrigger.refresh();
  //   const titleElements = document.querySelectorAll(".title-second__wrapper");

  //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   if (titleElements.length > 0) {
  //     titleElements.forEach((titleElement) => {
  //       gsap.to(titleElement, {
  //         scrollTrigger: {
  //           trigger: titleElement,
  //           start: "90% bottom",
  //           end: "top center",
  //           scrub: 1,
  //         },
  //         duration: 1,
  //         backgroundSize: "100% 100%",
  //         ease: "none",
  //       });
  //     });
  //   }
  // }
  // titleAnimation();
  // =========================================



  const titleElements = document.querySelectorAll(".title-second__wrapper");
  if (titleElements.length > 0) {
    // Функция для вычисления прогресса
    function calculateProgress(rect) {
      const viewportHeight = window.innerHeight;
      const centerY = viewportHeight / 2;
    
      // Рассчитываем прогресс от нижней границы экрана до центра экрана
      const progress = ((viewportHeight - rect.bottom) / (centerY)) * 100;
    
      return Math.max(0, Math.min(100, progress)); // Ограничиваем прогресс от 0 до 100
    }
    
    // Обновляем `backgroundSize` на основе прогресса
    function updateBackgroundSize(el, progress) {
      el.style.backgroundSize = `${progress}% 100%`;
    }
    
    // Проверка положения элемента при загрузке страницы
    function checkInitialPosition(el) {
      const rect = el.getBoundingClientRect();
    
      // Если элемент выше верхнего края вьюпорта, устанавливаем progress = 100%
      if (rect.bottom < 0) {
        updateBackgroundSize(el, 100);
      } else if (rect.top < window.innerHeight) {
        // Если элемент частично или полностью в вьюпорте, вычисляем начальный прогресс
        const progress = calculateProgress(rect);
        updateBackgroundSize(el, progress);
      } else {
        // Если элемент ниже вьюпорта, устанавливаем progress = 0%
        updateBackgroundSize(el, 0);
      }
    }
    
    // Обработчик IntersectionObserver
    function handleIntersection(entries) {
      entries.forEach((entry) => {
        const el = entry.target;
      
        if (entry.isIntersecting) {
          // Если элемент виден, вычисляем прогресс
          const rect = el.getBoundingClientRect();
          const progress = calculateProgress(rect);
        
          updateBackgroundSize(el, progress);
        }
      });
    }
    
    // Обновление прогресса для всех видимых элементов при скролле
    function handleScroll() {
      titleElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
      
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          // Элемент частично виден, обновляем прогресс
          const progress = calculateProgress(rect);
          updateBackgroundSize(el, progress);
        }
      });
    }
    
    // Инициализация IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Отслеживаем относительно вьюпорта
      threshold: 0, // Срабатывает при любом пересечении
    });
    
    // Подключаем элементы к обзерверу
    titleElements.forEach((el) => {
      observer.observe(el);
    
      // Проверяем позицию элемента при загрузке
      checkInitialPosition(el);
    });
    
    // Обновляем прогресс при скролле
    window.addEventListener("scroll", handleScroll);
  }

  

  

  // == SPOLLERS INDEX ========================================
  const spollers = document.querySelectorAll('.spollers');
  spollers.forEach((spoller) => {

    const wrapperSpollers = spoller.querySelectorAll('.wrapper-spoller');
    const wrapperSpollerFaqs = spoller.querySelectorAll('.wrapper-spoller-faq');
    const listsItem = spoller.querySelectorAll('.lists__item');

    if (wrapperSpollers.length) {
      wrapperSpollers.forEach((wrapper, index) => {
        wrapper.style.setProperty('--index', index);
      });
    } 

    if (wrapperSpollerFaqs.length){
      wrapperSpollerFaqs.forEach((wrapper, index) => {
        wrapper.style.setProperty('--index', index);
      });
    }
    if (listsItem.length){
      listsItem.forEach((wrapper, index) => {
        wrapper.style.setProperty('--index', index);
      });
    }
  });
  // =========================================


  // == SELECT (PRICE SECTION) ========================
  const priceSelect = document.querySelector('.price__select');
  
  if (priceSelect) {
    const selectOptions = document.querySelector('.select__options');
    const priceValues = document.querySelectorAll('.price__value');
    const priceTxtChngOnes = document.querySelectorAll('.price__txt-chng-one');

    let selectedIndex = -1;
  
    function handleHiddenAttributeChange(mutationsList) {
      const isHidden = selectOptions.hasAttribute('hidden');
      
      if (isHidden) {
        const newSelectedIndex = Array.from(selectOptions.querySelectorAll('.select__option')).findIndex(option => option.getAttribute('hidden') !== null);
        
        // Если индекс опции валидный и не совпадает с предыдущим, удалить классы _show-price и _show-txt со всех элементов
        if (newSelectedIndex >= 0 && newSelectedIndex !== selectedIndex) {
          priceValues.forEach(priceValue => {
            priceValue.classList.remove('_show-price');
          });
  
          priceTxtChngOnes.forEach(priceTxtChngOne => {
            priceTxtChngOne.classList.remove('_show-txt');
          });
  
          // Присвоить новому .price__value класс _show-price и новому .price__txt-chng-one класс _show-txt
          priceValues[newSelectedIndex].classList.add('_show-price');
          priceTxtChngOnes[newSelectedIndex].classList.add('_show-txt');
  
          selectedIndex = newSelectedIndex;
        }
      }
    }
  
    const observer = new MutationObserver(handleHiddenAttributeChange);
    observer.observe(selectOptions, { attributes: true });
  
    handleHiddenAttributeChange();
  }

  // ============================================

  // == SELECT (PRICE SECTION) ========================
  const selects = document.querySelectorAll('.slide-number__select select');

  if (selects.length > 0) {
      selects.forEach(select => {
          const customOptions = select.closest('.select').querySelectorAll('.select__option');
          const parentBody = select.closest('.slide-number').querySelector('.slide-number__body');
  
          customOptions.forEach(option => {
              option.addEventListener('click', function () {
                  const value = this.dataset.value;
                  const selectedOption = [...select.options].find(opt => opt.value === value);
  
                  if (selectedOption) {
                      select.value = value; 
                      const dataNumber = selectedOption.dataset.number;
  
                      if (parentBody) {
                          parentBody.classList.remove('_has', '_has-not');
                          parentBody.classList.forEach(className => {
                              if (className.startsWith('_value-')) {
                                  parentBody.classList.remove(className);
                              }
                          });
  
                          if (value && !value.includes(' ')) {
                              parentBody.classList.add(`_value-${value}`);
                          }
  
                          if (dataNumber === 'has') {
                              parentBody.classList.add('_has');
                              parentBody.classList.remove('_empty'); 
                          } else if (dataNumber === 'hasNot') {
                              parentBody.classList.add('_has-not');
                              parentBody.classList.remove('_empty'); 
                          } else {
                              parentBody.classList.add('_empty');
                          }
                      }
                  }
              });
          });
      });
  }
  
  
  

  
  // =============================================


  let lastWidth = window.innerWidth;
  const resizeObserver = new ResizeObserver(entries => {
      requestAnimationFrame(() => {
          entries.forEach(entry => {
              const currentWidth = entry.contentRect.width;
              if (currentWidth !== lastWidth) {
                  initSplitType();
                  // titleAnimation();
                  lastWidth = currentWidth; 
              }
          });
      });
  });
  resizeObserver.observe(document.body);
          


});

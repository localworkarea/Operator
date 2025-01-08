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

gsap.registerPlugin(ScrollTrigger);

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
  const titleElements = document.querySelectorAll(".title-second__wrapper");
  if (titleElements.length > 0) {
    titleElements.forEach((titleElement) => {
      gsap.to(titleElement, {
        scrollTrigger: {
          trigger: titleElement,
          start: "bottom bottom",
          end: "top center",
          scrub: 1,
        },
        // duration: 1,
        backgroundSize: "100% 100%",
        ease: "none",
      });
    });
  }
  // =========================================
  



  let lastWidth = window.innerWidth;
  const resizeObserver = new ResizeObserver(entries => {
      requestAnimationFrame(() => {
          entries.forEach(entry => {
              const currentWidth = entry.contentRect.width;
              if (currentWidth !== lastWidth) {
                  initSplitType();
                  lastWidth = currentWidth; 
              }
          });
      });
  });
  resizeObserver.observe(document.body);
          


});

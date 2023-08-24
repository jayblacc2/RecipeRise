const headingElements = document.querySelectorAll('h1,h2,h3');
const searchContent = document.querySelector('.search-img');
const showContent = document.querySelector('.search__icon-content');
const secNavContent = document.querySelector('.secondary__nav-contents');
const closeContent = document.querySelector('#close__search-content');
const overlayWindow = document.querySelector('.overlay');
const modal = document.querySelector('.modal-window');

const closeButtons = document.querySelectorAll('.close-btn');
const toggleButton = document.querySelector('.modal__btn-toggle');

const dropdowns = document.querySelectorAll('.dropdown__content');

const secNavList = document.querySelector(
  '.secondary__nav-contents'
).firstElementChild;

searchContent.addEventListener('click', (e) => {
  showContent.classList.remove('visually-hidden');
  secNavList.style.opacity = 0;
});

closeContent.addEventListener('click', () => {
  showContent.classList.add('visually-hidden');
  secNavList.style.opacity = 1;
});

headingElements.forEach((heading) => {
  heading.addEventListener('mouseover', (e) => {
    console.log('FIX HERE');
  });
});

toggleButton.addEventListener('click', (e) => {
  overlayWindow.classList.remove('visually-hidden');
  setTimeout(() => {
    modal.classList.remove('visually-hidden');
  }, 200);
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    overlayWindow.classList.add('visually-hidden');
    modal.classList.add('visually-hidden');
  });
});

//dropdown
dropdowns.forEach((dropdown) => {
  const parentLink = dropdown.parentNode.querySelector('.nav__link');
  const dropdownItemText = parentLink.textContent.trim();
});

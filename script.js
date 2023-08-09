const searchContent = document.querySelector('.search-img');
const showContent = document.querySelector('.search__icon-content');
const secNavContent = document.querySelector('.secondary__nav-contents');
const closeContent = document.querySelector('#close__search-content');
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

console.log(secNavList);

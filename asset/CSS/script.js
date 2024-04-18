document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('.header__burger');
  const menuList = document.querySelector('.header__list');

  burgerBtn.addEventListener('click', function() {
    menuList.classList.toggle('menu-open');
    burgerBtn.classList.toggle('menu-open');
    if (menuList.classList.contains('menu-open')) {
      const burgerRect = burgerBtn.getBoundingClientRect();
      menuList.style.left = burgerRect.left + 'px';
      menuList.style.top = burgerRect.bottom + 'px';
    }
  });
});

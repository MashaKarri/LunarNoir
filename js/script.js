// Открытие и закрытие меню на мобильных устройствах
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }
  
  // Открытие и закрытие выпадающего списка жанров
  function toggleDropdown() {
    document.querySelector('.dropdown').classList.toggle('active');
  }
  
  // Открытие и закрытие подменю внутри жанров
  function toggleSubmenu(element) {
    element.nextElementSibling.classList.toggle('active');
  }
  
  // Убираем выпадающее меню на планшетах и ПК
  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) {
      document.querySelector('.genres-btn').removeAttribute('onclick');
    }
  });
  
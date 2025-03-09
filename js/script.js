document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const genresBtn = document.getElementById("genres-btn");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const genreItems = document.querySelectorAll(".dropdown-item");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  genresBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle("show");
  });

  genreItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.stopPropagation();

      document.querySelectorAll(".sub-dropdown").forEach((sub) => {
        sub.classList.remove("show");
      });

      const subDropdown = this.querySelector(".sub-dropdown");

      if (subDropdown) {
        subDropdown.classList.add("show");
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (!genresBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove("show");
      document.querySelectorAll(".sub-dropdown").forEach((sub) => {
        sub.classList.remove("show");
      });
    }
  });

  genreItems.forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelectorAll(".sub-dropdown").forEach((sub) => {
        if (!this.contains(sub)) {
          sub.classList.remove("show");
        }
      });
    });
  });
});
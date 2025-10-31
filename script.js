document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
});
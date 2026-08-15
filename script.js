document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.getElementById("navLinks");
  const form = document.querySelector(".contact-form");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const button = form.querySelector("button");

      button.textContent = "Message Sent ✓";
      button.disabled = true;

      form.reset();
    });
  }
});
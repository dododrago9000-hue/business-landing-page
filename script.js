document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  const ctaBtn = document.getElementById("ctaBtn");
  const ctaMessage = document.getElementById("ctaMessage");

  const priceButtons = document.querySelectorAll(".price-btn");


  /* MOBILE MENU */

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });

    });

  }


  /* MAIN CTA */

  if (ctaBtn && ctaMessage) {

    ctaBtn.addEventListener("click", () => {

      ctaMessage.textContent =
        "You're ready to start with NOVA ✓";

      ctaBtn.textContent = "Started ✓";

      ctaBtn.disabled = true;

    });

  }


  /* PRICING BUTTONS */

  priceButtons.forEach(button => {

    button.addEventListener("click", () => {

      const originalText = button.textContent;

      button.textContent = "Selected ✓";

      button.disabled = true;

      setTimeout(() => {

        button.textContent = originalText;
        button.disabled = false;

      }, 2500);

    });

  });

});
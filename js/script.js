const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector("span");

    content.classList.toggle("hidden");
    icon.textContent = content.classList.contains("hidden") ? "+" : "−";
  });
});

const button = document.getElementById("toggleProfesores");
const extraCards = document.querySelectorAll("[data-extra]");
let expanded = false;

button.addEventListener("click", () => {
  expanded = !expanded;
  extraCards.forEach((card) => card.classList.toggle("hidden"));
  button.textContent = expanded ? "Ver menos" : "+ Más";
});

document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

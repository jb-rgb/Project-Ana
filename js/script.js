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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacto");

  const campos = {
    nombre: {
      input: document.getElementById("nombre"),
      error: document.getElementById("error-nombre"),
      validar: (valor) => valor.trim().length > 2,
      mensaje: "El nombre debe tener al menos 3 caracteres.",
    },
    edad: {
      input: document.getElementById("edad"),
      error: document.getElementById("error-edad"),
      validar: (valor) => parseInt(valor) >= 15 && parseInt(valor) <= 100,
      mensaje: "La edad debe estar entre 15 y 100 años.",
    },
    telefono: {
      input: document.getElementById("telefono"),
      error: document.getElementById("error-telefono"),
      validar: (valor) => /^[0-9]{10}$/.test(valor),
      mensaje: "El teléfono debe tener 10 dígitos.",
    },
    mail: {
      input: document.getElementById("mail"),
      error: document.getElementById("error-mail"),
      validar: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
      mensaje: "Introduce un correo válido.",
    },
    origen: {
      input: document.getElementById("origen"),
      error: document.getElementById("error-origen"),
      validar: (valor) => valor !== "",
      mensaje: "Selecciona una opción.",
    },
  };

  // Validación en tiempo real
  Object.values(campos).forEach(({ input, error, validar, mensaje }) => {
    input.addEventListener("input", () => {
      if (validar(input.value)) {
        error.textContent = "";
      } else {
        error.textContent = mensaje;
      }
    });

    // También para selects
    input.addEventListener("change", () => {
      if (validar(input.value)) {
        error.textContent = "";
      } else {
        error.textContent = mensaje;
      }
    });
  });

  // Validación al enviar
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let esValido = true;

    Object.values(campos).forEach(({ input, error, validar, mensaje }) => {
      if (!validar(input.value)) {
        error.textContent = mensaje;
        esValido = false;
      } else {
        error.textContent = "";
      }
    });

    if (esValido) {
      form.reset();
      alert("¡Formulario enviado correctamente!");
    }
  });
});

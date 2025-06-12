document.querySelectorAll(".faq-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector("span");

    if (content.classList.contains("hidden")) {
      // Cierra todos
      document
        .querySelectorAll(".faq-content")
        .forEach((c) => c.classList.add("hidden"));
      document
        .querySelectorAll(".faq-toggle span")
        .forEach((i) => (i.textContent = "+"));

      // Abre este
      content.classList.remove("hidden");
      icon.textContent = "−";
    } else {
      content.classList.add("hidden");
      icon.textContent = "+";
    }
  });
});

const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document
  .getElementById("toggleProfesores")
  .addEventListener("click", function () {
    const extras = document.querySelectorAll("[data-extra]");
    extras.forEach((card) => card.classList.toggle("hidden"));

    // Alternar texto del botón
    if (this.textContent.trim() === "+ Más") {
      this.textContent = "- Menos";
    } else {
      this.textContent = "+ Más";
    }
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
  const mensajeExito = document.getElementById("mensaje-exito");

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

      // Mostrar el mensaje de éxito
      mensajeExito.classList.remove("hidden");

      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        mensajeExito.classList.add("hidden");
      }, 3000);
    }
  });
});

const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("newsletter-email");
const errorMsg = document.getElementById("newsletter-error");
const successMsg = document.getElementById("newsletter-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    errorMsg.textContent = "Por favor ingresa un correo válido.";
    successMsg.classList.add("hidden");
  } else {
    errorMsg.textContent = "";
    successMsg.classList.remove("hidden");
    emailInput.value = "";

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
      successMsg.classList.add("hidden");
    }, 3000);
  }
});

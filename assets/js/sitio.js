const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");
const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

// MANTENIMIENTO: actualiza aquí los datos oficiales de CST. Los campos vacíos muestran “por confirmar”.
const CST_SETTINGS = {
  address: "Av. Rafael Andrade y Magdalena ushiña", // Dirección completa de atención.
  city: "Loreto", // Ciudad o cantón que acompaña la dirección del mapa.
  phoneFixed: "", // Teléfono fijo; se puede dejar vacío si CST no tiene uno.
  phoneMobile: "", // Si queda vacío, se muestra el número de WhatsApp como celular corporativo.
  whatsapp: "593962055495", // Código de país + número, sin signo +, espacios ni guiones.
  email: "cst.tec.ea@gmail.com", // Correo que recibirá solicitudes del formulario.
  hours: "Lunes a viernes, 08:30 a 17:30", // Horario comercial y de soporte que se mostrará en la sección de contacto.
  socials: {
    linkedin: "", // Pega aquí la URL oficial cuando se cree el perfil.
    facebook: "https://www.facebook.com/profile.php?id=61594073820635",
    instagram: "", // Pega aquí la URL oficial cuando se cree el perfil.
    tiktok: "https://www.tiktok.com/@cst.seguridadelectronica",
  },
};

// Agrega solo reseñas reales, autorizadas y aprobadas para publicación.
// Formato: { quote: "...", name: "...", context: "Hogar" | "Negocio" | ... }
const CST_TESTIMONIALS = [];

// MENÚ MÓVIL: abre y cierra la navegación en pantallas pequeñas.
menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menú");
  });
});

// DATOS DEL SITIO: coloca el contenido configurado en el footer y la sección de ubicación.
const contactFallbacks = document.querySelectorAll("[data-contact]");
contactFallbacks.forEach((element) => {
  const key = element.dataset.contact;
  const value = CST_SETTINGS[key] || (key === "phoneMobile" ? CST_SETTINGS.whatsapp : "");
  element.textContent = value || element.dataset.fallback || "";
});

document.querySelectorAll("[data-contact-link]").forEach((link) => {
  const key = link.dataset.contactLink;
  const value = CST_SETTINGS[key] || (key === "phoneMobile" ? CST_SETTINGS.whatsapp : "");
  if (!value) {
    link.removeAttribute("href");
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
    return;
  }

  const href = key === "email"
    ? `mailto:${value}`
    : `tel:${value.replace(/[^+\d]/g, "")}`;
  link.href = href;
  link.removeAttribute("aria-disabled");
  link.removeAttribute("tabindex");
});

// MAPA: solo se carga cuando hay dirección y ciudad; así no se muestra una ubicación aproximada.
const fullAddress = [CST_SETTINGS.address, CST_SETTINGS.city].filter(Boolean).join(", ");
if (CST_SETTINGS.address && CST_SETTINGS.city) {
  const map = document.querySelector("#google-map");
  const placeholder = document.querySelector("#map-placeholder");
  map.src = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
  map.hidden = false;
  placeholder.hidden = true;
}

// REDES SOCIALES: escribe la URL completa https://... cuando CST cree cada perfil.
document.querySelectorAll("[data-social-link]").forEach((link) => {
  const url = CST_SETTINGS.socials[link.dataset.socialLink];
  if (!url || !url.startsWith("https://")) return;
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.removeAttribute("aria-disabled");
  link.removeAttribute("tabindex");
});

const whatsappNumber = CST_SETTINGS.whatsapp.replace(/\D/g, "");
const stickyWhatsapp = document.querySelector("#sticky-whatsapp");
if (whatsappNumber) {
  stickyWhatsapp.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero solicitar asesoría de CST Seguridad Electrónica.")}`;
  stickyWhatsapp.target = "_blank";
  stickyWhatsapp.rel = "noopener noreferrer";
  stickyWhatsapp.hidden = false;
}

// RESEÑAS: las tarjetas se crean desde datos aprobados, sin insertar HTML aportado por visitantes.
const reviewsGrid = document.querySelector("#reviews-grid");
if (CST_TESTIMONIALS.length) {
  CST_TESTIMONIALS.forEach((review) => {
    const card = document.createElement("article");
    card.className = "review-card";
    const quote = document.createElement("p");
    quote.textContent = `“${review.quote}”`;
    const author = document.createElement("b");
    author.textContent = review.name;
    const context = document.createElement("small");
    context.textContent = review.context;
    card.append(quote, author, context);
    reviewsGrid.append(card);
  });
} else if (reviewsGrid) {
  reviewsGrid.innerHTML = '<div class="reviews-empty"><span class="reviews-empty__mark">“</span><span><b>Aquí compartirás experiencias reales.</b><small>Agrega reseñas autorizadas de clientes de hogares y negocios en la configuración del sitio.</small></span></div>';
}

// FORMULARIO: prefiere WhatsApp; usa el correo configurado si no hay WhatsApp.
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const details = new FormData(form);
  const message = [
    "Hola, quiero solicitar asesoría de CST Seguridad Electrónica.",
    `Nombre: ${details.get("name")}`,
    `Contacto: ${details.get("contact")}`,
    `Tipo de espacio: ${details.get("sector") || "Sin especificar"}`,
    `Servicio: ${details.get("service") || "Sin especificar"}`,
    `Proyecto: ${details.get("message") || "Sin detalles adicionales"}`,
  ].join("\n");

  if (whatsappNumber) {
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    return;
  }

  if (CST_SETTINGS.email) {
    const subject = encodeURIComponent("Solicitud de asesoría | CST Seguridad Electrónica");
    window.location.href = `mailto:${CST_SETTINGS.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
    return;
  }

  formStatus.textContent = "El canal de recepción está pendiente de configuración. También puedes contactarnos usando los datos de esta página.";
});

// Mantiene actualizado el año del pie de página automáticamente.
document.querySelector("#year").textContent = new Date().getFullYear();

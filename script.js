// ==========================================================
// INTERACTIVIDAD JS: MODO OSCURO CON LOCALSTORAGE
// Permite alternar entre tema claro y tema oscuro,
// guardando la preferencia del usuario en el navegador.
// ==========================================================

// 1. Seleccionamos el botón de cambio de tema del DOM
const botonTema = document.getElementById("btn-tema");
const cuerpo = document.body;

// 2. Comprobamos si el usuario ya tenía guardada una preferencia en localStorage
const temaGuardado = localStorage.getItem("tema-preferido");

if (temaGuardado === "oscuro") {
  // Si guardó oscuro, aplicamos la clase al <body>
  cuerpo.classList.add("modo-oscuro");
  botonTema.textContent = "☀️ Claro";
} else {
  // Por defecto (o si guardó claro), se queda el modo claro minimalista
  botonTema.textContent = "🌙 Oscuro";
}

// 3. Escuchamos el evento de clic en el botón
botonTema.addEventListener("click", () => {
  // Alternamos la clase .modo-oscuro en el elemento <body>
  cuerpo.classList.toggle("modo-oscuro");

  // Verificamos si ahora está activo el modo oscuro
  const esOscuro = cuerpo.classList.contains("modo-oscuro");

  if (esOscuro) {
    botonTema.textContent = "☀️ Claro";
    // Guardamos la preferencia en el navegador para futuras visitas
    localStorage.setItem("tema-preferido", "oscuro");
  } else {
    botonTema.textContent = "🌙 Oscuro";
    // Guardamos preferencia en modo claro
    localStorage.setItem("tema-preferido", "claro");
  }
});

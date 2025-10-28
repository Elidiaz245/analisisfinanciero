function mostrarSeccion(id) {
  // Oculta todas las secciones
  document.querySelectorAll('.seccion').forEach(sec => {
    sec.classList.remove('activa');
  });

  // Muestra solo la sección seleccionada
  const s = document.getElementById(id);
  s.classList.add('activa');
}

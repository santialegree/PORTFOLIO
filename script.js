// Obtener elementos del DOM
const quienSoyBtn = document.querySelector('#quien-soy-btn');
const curriculumBtn = document.querySelector('#curriculum-btn');
const instagramBtn = document.querySelector('#instagram-btn');
const linkedinBtn = document.querySelector('#linkedin-btn');
const contactameBtn = document.querySelector('#contactame-btn');
const quienSoySection = document.querySelector('#quien-soy-section');
const curriculumSection = document.querySelector('#curriculum-section');
const instagramSection = document.querySelector('#instagram-section');
const linkedinSection = document.querySelector('#linkedin-section');
const contactameSection = document.querySelector('#contactame-section');
const form = document.querySelector('form');

// Ocultar todas las secciones excepto la de Quien soy al cargar la página
curriculumSection.style.display = 'none';
instagramSection.style.display = 'none';
linkedinSection.style.display = 'none';
contactameSection.style.display = 'none';

// Agregar eventos de click a los botones del menú de navegación
quienSoyBtn.addEventListener('click', () => {
  mostrarSeccion(quienSoySection);
  ocultarSecciones([curriculumSection, instagramSection, linkedinSection, contactameSection]);
});

curriculumBtn.addEventListener('click', () => {
  mostrarSeccion(curriculumSection);
  ocultarSecciones([quienSoySection, instagramSection, linkedinSection, contactameSection]);
});

instagramBtn.addEventListener('click', () => {
  // redirigir a Instagram
  window.location.href = 'https://www.instagram.com/tu_usuario/';
});

linkedinBtn.addEventListener('click', () => {
  // redirigir a LinkedIn
  window.location.href = 'https://www.linkedin.com/in/santiago-alegre-67b288193/';
});

contactameBtn.addEventListener('click', () => {
  mostrarSeccion(contactameSection);
  ocultarSecciones([quienSoySection, curriculumSection, instagramSection, linkedinSection]);
});

// Agregar evento de submit al formulario de contacto
form.addEventListener('submit', (e) => {
  e.preventDefault(); // evitar que la página se recargue al enviar el formulario
  // obtener los valores de los campos del formulario
  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const mensaje = document.querySelector('#mensaje').value;
  // enviar un correo electrónico utilizando una API o servicio externo
  // por ejemplo, utilizando el servicio EmailJS (https://www.emailjs.com/)
});

// Funciones auxiliares
function mostrarSeccion(seccion) {
  seccion.style.display = 'block';
}

function ocultarSecciones(secciones) {
  secciones.forEach((seccion) => {
    seccion.style.display = 'none';
  });
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").classList.add("show");
  } else {
    document.getElementById("myBtn").classList.remove("show");
  }
}


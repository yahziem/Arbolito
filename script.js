// Cambiar colores en tiempo real para las luces (letras)
const lightsElements = document.querySelectorAll('.light');

// Cambiar colores de las luces en intervalos
setInterval(() => {
  const colors = ['red', 'green', 'yellow', 'blue', 'pink', 'cyan'];
  
  lightsElements.forEach(light => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    light.style.color = randomColor;
    light.style.textShadow = `0 0 15px ${randomColor}`; // Efecto de sombra
  });
}, 1000);

// Efecto de parpadeo en las luces
setInterval(() => {
  lightsElements.forEach((light) => {
    light.style.opacity = Math.random() > 0.5 ? '1' : '0.7';
  });
}, 500);
  // Comprobar si ya se ha dado el consentimiento
  window.onload = function() {
    if (!localStorage.getItem('cookies-accepted')) {
      document.getElementById('cookie-banner').style.display = 'block';
    } else {
      document.getElementById('cookie-banner').style.display = 'none';
    }
  };

  // Función para aceptar las cookies
  document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies-accepted', 'true'); // Guardar la preferencia
    document.getElementById('cookie-banner').style.display = 'none'; // Ocultar el banner
    // Aquí se puede cargar Google Analytics si es aceptado
    gtag('config', 'G-V3TYXL31NM');
  });

  // Función para rechazar las cookies
  document.getElementById('decline-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies-accepted', 'false'); // Guardar la preferencia
    document.getElementById('cookie-banner').style.display = 'none'; // Ocultar el banner
    // Aquí puedes bloquear la carga de Google Analytics si se rechaza
  });
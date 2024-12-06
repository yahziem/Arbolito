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

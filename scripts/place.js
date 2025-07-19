// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuToggle.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
});

// Footer date and year
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleString();

// Wind chill logic
const tempEl = document.getElementById('temp');
const windEl = document.getElementById('wind');
const chillEl = document.getElementById('windchill');

const temp = parseFloat(tempEl.textContent);   // e.g. 30
const windSpeed = parseFloat(windEl.textContent); // e.g. 8

function calculateWindChill(t, w) {
  // Metric formula: Wind chill (°C) = 13.12 + 0.6215T - 11.37W^0.16 + 0.3965T W^0.16
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16)).toFixed(1);
}

if (temp <= 10 && windSpeed > 4.8) {
  chillEl.textContent = `${calculateWindChill(temp, windSpeed)}°C`;
} else {
  chillEl.textContent = 'N/A';
}


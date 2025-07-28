// temple data array
const temples = [
  {name:"Salk Lake Temple", location:"Salt Lake City, USA", dedicated:"1893-04-06", area:253000, image:"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"},
  {name:"Laie Hawaii Temple", location:"Hawaii, USA", dedicated:"1919-11-27", area:132000, image:"https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-3838-thumb.jpg"},
  {name:"São Paulo Brazil Temple", location:"São Paulo, Brazil", dedicated:"1978‑10‑30", area:88000, image:"https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"},
  // + 3 more you add:
  {name:"Accra Ghana Temple", location:"Accra, Ghana", dedicated:"2004‑01‑11", area:19500, image:"https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"},
  {name:"Rome Italy Temple", location:"Rome, Italy", dedicated:"2019‑03‑10", area:22500, image:"https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"},
  {name:"Aba Temple", location:"Abia State, Nigeria", dedicated:"1980‑08‑13", area:14500, image:"https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"},
];

// render function
function displayTemples(list) {
  const container = document.getElementById('templeCards');
  container.innerHTML = '';
  list.forEach(t => {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.innerHTML = `
      <img src="${t.image}" alt="${t.name}" loading="lazy">
      <div class="info">
        <h3>${t.name}</h3>
        <p><strong>Location:</strong> ${t.location}</p>
        <p><strong>Dedicated:</strong> ${t.dedicated}</p>
        <p><strong>Area:</strong> ${t.area.toLocaleString()} ft²</p>
      </div>`;
    container.appendChild(card);
  });
}

// filtering logic
document.querySelectorAll('nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    let filtered = temples;
    if (f === 'old') filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    if (f === 'new') filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    if (f === 'large') filtered = temples.filter(t => t.area > 90000);
    if (f === 'small') filtered = temples.filter(t => t.area < 10000);
    displayTemples(filtered);
  });
});

// show all on load
displayTemples(temples);

// footer year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

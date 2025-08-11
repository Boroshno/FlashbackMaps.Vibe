const map = L.map('map').setView([50.4501, 30.5234], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const points = [
  {
    coords: [50.4501, 30.5234],
    angle: 45,
    oldImg: 'https://via.placeholder.com/400x300.png?text=Old',
    newImg: 'https://via.placeholder.com/400x300.png?text=New'
  }
];

points.forEach(pt => {
  const marker = L.marker(pt.coords, { rotationAngle: pt.angle }).addTo(map);
  marker.on('click', () => openSlider(pt.oldImg, pt.newImg));
});

function openSlider(oldSrc, newSrc) {
  const overlay = document.getElementById('slider-container');
  overlay.classList.remove('hidden');
  document.getElementById('img-old').src = oldSrc;
  document.getElementById('img-new').src = newSrc;
  document.getElementById('img-overlay').style.width = '50%';
  document.getElementById('slider').value = 50;
}

document.getElementById('close-btn').onclick = () => {
  document.getElementById('slider-container').classList.add('hidden');
};

const slider = document.getElementById('slider');
slider.addEventListener('input', (e) => {
  document.getElementById('img-overlay').style.width = `${e.target.value}%`;
});

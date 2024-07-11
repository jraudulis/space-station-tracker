const h2 = document.getElementById('coordinates');

const fetchData = async function() {
 const response = await fetch('http://api.open-notify.org/iss-now.json');
 const getLocation = await response.json();
 return getLocation;
}

function getCoordinates(coordinates) {
 const latitude = coordinates.iss_position.latitude;
 const longitude = coordinates.iss_position.longitude;
 return { latitude, longitude};
}

async function updateDisplay() {
 try{
 const locationData = await fetchData();
 const cor = getCoordinates(locationData);
 h2.textContent = `latitude ${cor.latitude} Longitude ${cor.longitude}`;
 }catch(err){
  console.log('Oops daisy', err)
 }
}

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 2,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

updateDisplay();
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


const map = L.map('map').setView([0,0], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const circle = L.circle([0,0], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

setInterval(async function() {
 try{
 const locationData = await fetchData();
 const cor = getCoordinates(locationData);
  h2.textContent = `Latitude ${cor.latitude} Longitude ${cor.longitude}`;

circle.setLatLng([cor.latitude, cor.longitude]);
map.setView([cor.latitude, cor.longitude], 3)

 }catch(err){
  console.log('Oops daisy', err)
 }
}, 5000);

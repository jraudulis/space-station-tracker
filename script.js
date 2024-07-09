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


updateDisplay();
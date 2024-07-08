const h2 = document.getElementById('coordinates');

async function trackSpaceStation() {

 const response = await fetch('http://api.open-notify.org/iss-now.json');
 const getLocation = await response.json();
 return getLocation;
}

function getCoordinates(cor) {

 const latitude = cor.iss_position.latitude;
 const longitude = cor.iss_position.longitude;
 return { latitude, longitude};

}

async function updateDisplay() {

 const locationData = await trackSpaceStation(); 
 const coordinates = getCoordinates(locationData); 
 h2.textContent = `Latitude: ${coordinates.latitude}, Longitude: ${coordinates.longitude}`;
}


updateDisplay();
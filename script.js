const h2 = document.getElementById('coordinates');

async function trackSpaceStation() {

 const response = await fetch('http://api.open-notify.org/iss-now.json');
 const getLocation = await response.json();
 console.log(getLocation)
 return getLocation;
}

function getCoordinates (){
  const latitude = getLocation.iss_position.latitude;
  const longitude = getLocation.iss_position.longitude;
}

const updateDisplay = () => {
 h2.textContent = getCoordinates()
}

trackSpaceStation();
updateDisplay();
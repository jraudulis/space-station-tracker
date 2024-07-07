const showCoordinates = document.getElementById('coordinates');

async function trackSpaceStation(){

 const response = await fetch('http://api.open-notify.org/iss-now.json');
 const getLocation = await response.json();
 console.log(getLocation)
}

 trackSpaceStation();
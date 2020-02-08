const coords = 'coords';
const API_KEY = 'a734cce6a75b529d16f637e254c2fc08';

function saveCoords(coordsObj){
  localStorage.setItem(coords, JSON.stringify(coordsObj));
}
function setCoords(position){
  const coordsObj = {
    'latitude' : position.coords.latitude,
    'longitude' : position.coords.longitude
  };
  saveCoords(coordsObj);
}

function error(){
  console.warn('ERROR(' + err.code +'): '+ err.message);
}
function askForCoords(){
  navigator.geolocation.getCurrentPosition(setCoords, error);
}
function loadCoords(){
  const loadCoords = localStorage.getItem(coords);

  if(loadCoords === null){
    askForCoords();
  }else {
    //getWeather();
  }
}
function init(){
    loadCoords();
}
init();

const body = document.querySelector("body");
const imgNum = 3;


function getRandom(imgNum){
  const num = Math.floor(Math.random()*imgNum);
  return num;
}
function paintImage(randomNumber){
  const image = new Image();
  image.src = `./background/${randomNumber+1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function init(){
  const randomNumber = getRandom(imgNum);
  paintImage(randomNumber);
}

init();

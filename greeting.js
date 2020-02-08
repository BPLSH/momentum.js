const user = "user";
const nameform = document.querySelector(".nameform");

function submitName(event){
  event.preventDefault();
  const nameinput = nameform.querySelector("input");
  const currentValue = nameinput.value;
  saveUserName(currentValue);
  loadUser();
}

function loadUserName(){
  nameform.addEventListener("submit", submitName);
}

function saveUserName(name){
  localStorage.setItem(user, name);
}

function askUserName(){
  loadUserName();
  //loadUser(), init()..이거 질문..
}

function greetUser(userName){
  const greetText = document.querySelector('.greeting');

  nameform.setAttribute("class", "hiding");
  greetText.classList.remove("hiding");
  greetText.classList.add("showing");
  greetText.innerHTML = `Hello. ${userName}`;
}

function getUserName(){
  return localStorage.getItem(user);
}

function loadUser(){
  const userName = getUserName();

  if(userName === null){
    askUserName();
  }else{
    greetUser(userName);
  }
}
function init(){
  loadUser();
}
init();

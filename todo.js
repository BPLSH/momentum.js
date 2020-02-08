const todoform = document.querySelector(".todoform");
const todoul = document.querySelector('.todoul');
const todo = "todo";
const todoArray = [];

function setTodoList(){
  localStorage.setItem(todo, JSON.stringify(todoArray));
}
function saveObjInArray(Obj){
  todoArray.push(Obj);
  setTodoList();
}
function saveTodoList(IDnum, text){
  var todoObj = {
    id: "",
    text: ""
  };
  todoObj.id = IDnum;
  todoObj.text = text;
  saveObjInArray(todoObj);
}
function submitTodo(event){
  event.preventDefault();
  const todoInput = todoform.querySelector("input");
  const currentTodo = todoInput.value;
  showList(currentTodo);
  todoInput.value = "";
}
function loadTodoList(){
  todoform.addEventListener("submit", submitTodo);
}

function removeObjInArray(id){
  console.log(todoArray);
  const index = todoArray.findIndex(function(item) {return item.id === id});
  console.log(index);
  if(index > -1) todoArray.splice(index, 1);
}

/*
function removeObjInArray(id){
  return todoArray.filter(function(toDo){
    return toDo.id !== parseInt(id);
  });
}
*/
function deleteList(event){
  const li = event.target.parentElement;
  const ul = li.parentElement;
  const id = parseInt(li.id);

  ul.removeChild(li);

  removeObjInArray(id);
  setTodoList();
  /*
  todoArray = removeObjInArray(id);
  setTodoList();
  */
}
function clickDelBtn(){
  btn.addEventListener("click", deleteList);
}
function showList(text){
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const span = document.createElement('span');
  span.innerHTML = text;
  btn.innerHTML = "x";
  li.appendChild(btn);
  li.appendChild(span);
  btn.addEventListener("click", deleteList);
  const IDnum = todoArray.length+1;
  li.setAttribute("id",IDnum);
  todoul.appendChild(li);
  saveTodoList(IDnum, text);
}
function getList(){
  return JSON.parse(localStorage.getItem(todo));
}

function init(){
  const todolist = getList();
  var i = 0;

  if(todolist !== null){
    while(i < todolist.length){
      showList(todolist[i].text);

      i++;
    }
  }

  loadTodoList();
}
init();

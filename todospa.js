function createTask(){
  var commandBox = document.querySelector('#commandBox');
  var commandInput = document.querySelector('#commandInput');
  var taskList = document.querySelector('#taskList');

  var taskText = commandInput.value;
  var newLi = document.createElement('li');

  var newInput = document.createElement('input');
  newLi.appendChild(newInput);
  newInput.type = 'checkbox';
  var newText = document.createElement('textnode');
  newText.innerHTML = taskText;
  newLi.appendChild(newText);

  newInput.onclick = strikethrough;

  var dropdown = document.querySelector('#dropdown');
  var priority = dropdown.value;
  newLi.classList.add(priority);
  // console.log(newLi.classList);
  // console.log(newLi.classList[0]);
  taskList.appendChild(newLi);
  localSave('taskList');
}

function strikethrough(){
  if(this.checked){
    this.parentNode.classList.add('done');
  }
  else{
    this.parentNode.classList.remove('done');
  }
  localSave('taskList');
}

window.onload = function(){restoreList('taskList', strikethrough);};

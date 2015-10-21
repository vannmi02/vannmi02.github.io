function createTask(){
  var commandBox = document.querySelector('#commandBox');
  var commandInput = document.querySelector('#commandInput');
  var taskList = document.querySelector('#taskList');

  var taskText = commandInput.value;
  var newLi = document.createElement('li');
  taskList.appendChild(newLi);
  var newInput = document.createElement('input');
  newLi.appendChild(newInput);
  newInput.type = 'checkbox';
  var newText = document.createElement('textnode');
  newText.innerHTML = taskText;
  newLi.appendChild(newText);

  newInput.onclick = strikethrough;
  newInput.count = 0;

  var dropdown = document.querySelector('#dropdown');
  var priority = dropdown.value;
  if(priority === 'High'){
    newLi.classList.add('high');
  }
  else if(priority === 'Medium'){
    newLi.classList.add('medium');
  }
  else//(priority === 'Low')
  {
    newLi.classList.add('low');
  }
}

function strikethrough(){
  this.count++;
  if(this.count % 2 !== 0){
    this.parentNode.classList.add('done');
  }
  else{
    this.parentNode.classList.remove('done');
  }
}

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
  newLi.innerHTML += taskText;

  newLi.onchange = other;
  newLi.count = 0;

  var dropdown = document.querySelector('#dropdown');
  var priority = dropdown.value;
  if(priority === 'High'){
    newLi.style.color = 'red';
  }
  else if(priority === 'Medium'){
    newLi.style.color = 'yellow';
  }
  else//(priority === 'Low') 
  {
    newLi.style.color = 'green';
  }
}


function other(){
  this.count++;
  if(this.count % 2 !== 0){
    this.style.textDecoration = 'line-through';
  }
  else{
    this.style.textDecoration = 'none';
  }
}

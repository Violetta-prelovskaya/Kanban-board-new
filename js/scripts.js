let addMessage = document.querySelector('#addTask'),
 addButton = document.querySelector('#addButton'),
 todo = document.querySelector('.taskboard__list'),
 tasks = document.querySelectorAll('.task'),
 editBtn = document.querySelector('.task__edit');

let todoList = [];

if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', function(){

    let newTodo = {
        todo: addMessage.value,
    };

    todoList.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(todoList));
    if(addMessage.value) displayMessages();
    addMessage.value = '';

 });

function displayMessages(){

    let displayMessage = '';

    todoList.forEach(function(item, i){

    displayMessage += `
    <div class="taskboard__item task" draggable='true'>
        <div class="task__body">
            <p class="task__view">${item.todo}</p>
            <input class='task__input' type='text' id='item_${i}'>
        </div>
        <button class="task__edit" type="button" aria-label="Изменить"></button>
    </div>
    `;
    todo.innerHTML = displayMessage;
});

};

const taskElements = todo.querySelectorAll(`.taskboard__item`);

for (const task of taskElements) {
    task.draggable = true;
}

todo.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`task--dragged`);
});
  
todo.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`task--dragged`);
});

todo.addEventListener(`dragover`, (evt) => {

    evt.preventDefault();
  
    const activeElement = todo.querySelector(`.task--dragged`);

    const currentElement = evt.target;

    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`task`);
  
    if (!isMoveable) {
      return;
    }
  
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
  
    todo.insertBefore(activeElement, nextElement);
});


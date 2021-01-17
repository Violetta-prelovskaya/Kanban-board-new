document.querySelector('.add-task__button').addEventListener('click', function(evt) {
    evt.preventDefault();
    let taskValue = document.querySelector('.task-value').value;
    console.log(taskValue);
    addTask(taskValue);
})

const addTask = (taskValue) => {
    let task = document.createElement('div');
    task.classList.add('taskboard__item');
    task.classList.add('task');

    let taskContent = document.createElement('div');
    taskContent.classList.add('task__body');
    taskContent.setAttribute('draggable', 'true');

    let taskText = document.createElement('p');
    taskText.classList.add('task__view');
    taskText.innerText = taskValue;

    let edit = document.createElement('button');
    edit.classList.add('task__edit');
    edit.setAttribute('type', 'button');
    edit.setAttribute('aria-label', 'Изменить');

    task.appendChild(taskContent);
    task.appendChild(taskText);
    task.appendChild(edit);

    taskList = document.querySelector('.taskboard__list');
    taskList.appendChild(task);
}
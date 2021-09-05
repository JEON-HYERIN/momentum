const todoForm = document.querySelector('#todo__form');
const todoInput = todoForm.querySelector('input[type="text"]');
const todoMenu = document.querySelector('ul.todo__menu');
const TODOS_KEY = 'toDos';
let todos = [];

todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const toDoValue = todoInput.value;
  todoInput.value = '';
  todosObj = {
    id: Date.now(),
    text: toDoValue
  };
  todos.push(todosObj);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  showToDos(todosObj);
});

function showToDos(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.textContent = newToDo.text;
  const button = document.createElement('button');
  button.textContent = '✖';
  todoMenu.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener('click', event => {
    const li = event.target.parentElement;
    todos = todos.filter(function (item) {
      return item.id !== li.id
    });
    console.log(todos)
    li.remove();
  });
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(item => {
    showToDos(item);
  });
}

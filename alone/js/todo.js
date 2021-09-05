const todoForm = document.querySelector('#todo__form');
const todoInput = todoForm.querySelector('input[type="text"]');
const todoMenu = document.querySelector('ul.todo__menu');
const TODOS_KEY = 'toDos';
let todos = [];

todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const toDoValue = todoInput.value;
  todoInput.value = '';
  const todosObj = {
    text: toDoValue,
    id: Date.now(),
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
  li.appendChild(span);
  li.appendChild(button);
  todoMenu.appendChild(li);
  button.addEventListener('click', event => {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(function (todo) {
      return todo.id !== parseInt(li.id);
    });
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  });
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos; //전에있던 todos복원
  parsedToDos.forEach(item => {
    showToDos(item);
  });
}

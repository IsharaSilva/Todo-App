const addTodo = () => {
  //create new todo item
  const newTodoInput = document.getElementById("newTodo");
  let currentTodoList = document.getElementById("todoList").innerHTML;
  currentTodoList += `<li class="todo">${newTodoInput.value}</li>`;
  document.getElementById("todoList").innerHTML = currentTodoList;
  newTodoInput.value = "";
  // update the displayed item count
  updateItemCount()
};

const updateItemCount = () => {
  let count = getItemCount();
  document.getElementById("itemCount").innerHTML = count;
}

const getItemCount = () => {
  let currentTodoList = document.getElementById("todoList");
  let count = currentTodoList.childNodes.length + 1;
  return count;
}

document.getElementById("addTodo").addEventListener("click", addTodo);

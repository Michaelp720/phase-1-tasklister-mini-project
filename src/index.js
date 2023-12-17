document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector(`#create-task-form`).addEventListener("submit", addToTodo);
  
  function addToTodo(e){
    e.preventDefault(); //prevents default behavior of submit event e
    
    const newTaskDescription = document.querySelector('#new-task-description').value;
    //initializes a variable to the user typed value
    const newTask = document.createElement('li'); //creates a new list item
    newTask.appendChild(document.createTextNode(newTaskDescription)); //adds newTaskDescription as text of new list item
    document.querySelector('#tasks').appendChild(newTask); //adds new list item to tasks list
    document.querySelector('#new-task-description').value = ''; //resets user entered text
  }
});

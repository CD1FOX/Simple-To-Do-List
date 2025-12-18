const taskInput = document.querySelector(".task-wrapper input");
const addTaskButton = document.querySelector(".task-wrapper button");

function addTaskHandler(){
    const currentTask = taskInput.value;

    console.log(currentTask);

    taskInput.value = "";
}

addTaskButton.addEventListener('click', addTaskHandler)
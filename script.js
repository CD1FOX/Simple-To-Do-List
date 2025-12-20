const taskInput = document.querySelector(".task-wrapper input");
const addTaskButton = document.querySelector(".task-wrapper button");
const taskListUL = document.querySelector(".task-list ul")

function addTaskHandler(){
    const currentTask = taskInput.value;

    if (currentTask.trim() === ""){
        console.log("Input field is empty")
        return;
    }

    const li = document.createElement("li");
    li.classList.add("task");

    li.innerHTML = `
        <span>${currentTask}</span>
        <button type="button" class="complete-btn">Complete</button>
    `;

    taskListUL.appendChild(li);

    taskInput.value = "";
}


addTaskButton.addEventListener('click', addTaskHandler);

taskListUL.addEventListener('click', function(event){
    if (event.target.classList.contains("complete-btn")){
        const taskItem = event.target.closest(".task");
        taskItem.classList.toggle("completed")
    }
});
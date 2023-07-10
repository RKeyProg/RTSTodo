const COMPLITED_TASK_LIST = document.getElementById("complitedTasks");
const UNCOMPLITED_TASK_LIST = document.getElementById("uncomplitedTasks");

const ADD_TASK_FORM = document.getElementById("addTaskForm");
const INPUT_TASK = document.getElementById("inputTask");

ADD_TASK_FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  if (INPUT_TASK.value === "") {
    alert("Enter the correct value");
    return;
  }

  addNewTask(INPUT_TASK.value);
  INPUT_TASK.value = "";
});

function addNewTask(value) {
  let newTask = document.querySelector(".task_uncomplited").cloneNode(true);
  newTask.querySelector("span").textContent = value;
  UNCOMPLITED_TASK_LIST.appendChild(newTask);
}

// change status in tasks
document.body.addEventListener("click", function (event) {
  const elem = event.target;
  if (elem.closest(".task_uncomplited")) {
    compliteTask(elem.closest(".task_uncomplited"));
  } else if (elem.closest(".task_complited")) {
    uncompliteTask(elem.closest(".task_complited"));
  } else {
    return;
  }
});

function compliteTask(task) {
  const currentTask = task;
  currentTask.className =
    "task task_complited app__element element_shadow_inset";
  task.parentNode.removeChild(task);

  COMPLITED_TASK_LIST.appendChild(currentTask);
}

function uncompliteTask(task) {
  const currentTask = task;
  currentTask.className = "task task_uncomplited app__element element_shadow";
  task.parentNode.removeChild(task);

  UNCOMPLITED_TASK_LIST.appendChild(currentTask);
}

const addTaskOnPhones = document.getElementById("addBtn");

addTaskOnPhones.addEventListener("click", () => {
  let text = prompt("Enter new task");
  if (text === "") {
    alert("Enter the correct value");
    return;
  }

  addNewTask(text);
});

const hamburgerBtn = document.getElementById("hamburger");

hamburgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("This function is not available");
});

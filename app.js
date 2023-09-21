const input = document.querySelector(".app__input");
const taskList = document.querySelector(".app__task-list");
const button = document.querySelector(".app__add-button");

button.addEventListener("click", function () {
  const taskText = input.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.className = "task-li";

    let taskTextElement = document.createElement("span");
    taskTextElement.className = "app__task-text";
    taskTextElement.textContent = taskText;

    const doneCheckbox = document.createElement("input");
    doneCheckbox.className = "app__task-done";
    doneCheckbox.type = "checkbox";
    
    doneCheckbox.addEventListener("change", function () {
      if (doneCheckbox.checked) {
        li.classList.add("app__task-done");
      } else {
        li.classList.remove("app__task-done");
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "app__delete-button";
    deleteButton.textContent = "Удалить";

    li.appendChild(taskTextElement);
    li.appendChild(deleteButton);
    li.appendChild(doneCheckbox);

    taskList.appendChild(li);

    input.value = "";

    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    const taskControls = document.createElement("div");
    taskControls.className = "app__task-controls";
    taskControls.appendChild(doneCheckbox);
    taskControls.appendChild(deleteButton);
    li.appendChild(taskControls);
  }
});


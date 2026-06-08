const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const list = document.querySelector(".todo-list");

button.addEventListener("click", function () {
    const taskText = input.value;

    if (taskText === "") {
        return;
    }

    const item = document.createElement("li");
    item.classList.add("todo-item");
    item.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(deleteButton);
    list.appendChild(item);

    input.value = "";
});
const editButtons = document.querySelectorAll(".edit-btn");
const cancelButton = document.querySelector("#cancel-edit-task-button");
const editButton = document.querySelector("#edit-task-button");

const fillEditForm = (task) => {
    const taskInput = document.getElementById('task-input');
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');
    const startHour = document.getElementById('start-hour');
    const endHour = document.getElementById('end-hour');
    const descriptionInput = document.getElementById('description-input');

    taskInput.value = task.task;
    startDate.value = task.startDate;
    endDate.value = task.endDate;
    startHour.value = task.startHour;
    endHour.value = task.endHour;
    descriptionInput.value = task.description;
};

const editTask = (rowIndex) => {
    const taskInput = document.getElementById("task-input");
    const startDate = document.getElementById("start-date");
    const endDate = document.getElementById("end-date");
    const startHour = document.getElementById("start-hour");
    const endHour = document.getElementById("end-hour");
    const descriptionInput = document.getElementById("description-input");

    currentUser.tasks[rowIndex].task = taskInput.value;
    currentUser.tasks[rowIndex].startDate = startDate.value;
    currentUser.tasks[rowIndex].endDate = endDate.value;
    currentUser.tasks[rowIndex].startHour = startHour.value;
    currentUser.tasks[rowIndex].endHour = endHour.value;
    currentUser.tasks[rowIndex].description = descriptionInput.value;
    currentUser.tasks[rowIndex].status = calculateTaskStatus(startDate.value, endDate.value);

    if (!taskInput.value || !startDate.value || !endDate.value || !startHour.value || !endHour.value) {
        alert("Os campos essenciais precisam estar preenchidos!");
        return;
    }
    

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    updateUserRecords(currentUser);
}

editButtons.forEach(button => {
    button.addEventListener("click", () => {
        const rowIndex = button.closest("tr").rowIndex - 1;
        const task = currentUser.tasks[rowIndex];

        fillEditForm(task);

        document.querySelector("#add-task-button").style.display = "none";
        document.querySelector(".edit-buttons").style.display = "flex";

        editButton.addEventListener("click", e => {
            e.preventDefault();
            editTask(rowIndex);
            window.location.reload();
        });
        cancelButton.addEventListener("click", e => {
            e.preventDefault();
            window.location.reload();
        });   
    });
});

const taskTableBody = document.querySelector("#task-table-body");

taskTableBody.innerHTML = '';

const formatDate = (date, hour) => {
    const formattedDate = new Date(`${date}T${hour}`);
    return formattedDate.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
};

if (currentUser.tasks.length > 0) {
    document.querySelector("#task-table-container").style.display = 'block';

    currentUser.tasks.forEach((task, index) => {
        const row = taskTableBody.insertRow();
        row.id = `task-row-${index}`;

        const cellTask = row.insertCell(0);
        const cellStartDate = row.insertCell(1);
        const cellEndDate = row.insertCell(2);
        const cellStatus = row.insertCell(3);
        const cellActions = row.insertCell(4);

        cellTask.innerHTML = task.task;
        cellStartDate.innerHTML = formatDate(task.startDate, task.startHour);
        cellEndDate.innerHTML = formatDate(task.endDate, task.endHour);
        cellStatus.innerHTML = task.status;

        const btnMarkComplete = `<button class="complete-btn" id="complete-button"><i class="bi bi-check-circle-fill"></i></button>`;
        const btnEdit = `<button class="edit-btn" id="edit-button"><i class="bi bi-pen-fill"></i></button>`;
        const btnDelete = `<button class="delete-btn" id="delete-button"><i class="bi bi-trash-fill"></i></button>`;

        cellActions.innerHTML = `${btnEdit} ${btnDelete} ${btnMarkComplete}`;
    });
} 
else document.getElementById('task-table-container').style.display = "none";
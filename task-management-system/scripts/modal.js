const task = document.querySelector("#task-table-body");


task.addEventListener("click", e => {
    const target = e.target;
    const closestRow = target.closest("tr");
    if (closestRow && closestRow.id.startsWith("task-row-")) {
        const rowIndex = parseInt(closestRow.id.replace("task-row-", ""), 10);
        const task = currentUser.tasks[rowIndex];

        const modalTitle = document.querySelector(".modal-title");
        modalTitle.innerHTML = task.task;

        const modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = `
            <p><strong>Início:</strong> ${formatDate(task.startDate, task.startHour)}</p>
            <p><strong>Fim:</strong> ${formatDate(task.endDate, task.endHour)}</p>
            <p><strong>Status:</strong> ${task.status}</p>
            <p><strong>Descrição:</strong> ${task.description}</p>
        `;
    }
});
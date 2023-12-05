const completeButtons = document.querySelectorAll(".complete-btn");

const updateTaskStatus = (rowIndex) => {
    const task = currentUser.tasks[rowIndex];

    if (task.status !== "Realizada") currentUser.tasks[rowIndex].status = "Realizada";
    else {
        const startDate = task.startDate;
        const endDate = task.endDate;

        currentUser.tasks[rowIndex].status = calculateTaskStatus(startDate, endDate);
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    updateUserRecords(currentUser);
    window.location.reload();
};

completeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const rowIndex = button.closest("tr").rowIndex - 1;
        updateTaskStatus(rowIndex);
    });
});
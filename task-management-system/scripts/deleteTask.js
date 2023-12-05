const deleteButtons = document.querySelectorAll(".delete-btn");

const deleteTask = (taskId) => {
    currentUser.tasks = currentUser.tasks.filter(task => task.id !== taskId);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserRecords(currentUser);
    window.location.reload();
};

deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
        const rowIndex = button.parentElement.parentElement.rowIndex - 1;
        const taskId = currentUser.tasks[rowIndex].id;
        deleteTask(taskId);
    });
});
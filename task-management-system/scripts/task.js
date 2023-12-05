const currentUser = JSON.parse(localStorage.getItem("currentUser")) || { tasks: [] };
const addButton = document.querySelector("#add-task-button");

const updateUserRecords = (user) => {
    const userRecords = JSON.parse(localStorage.getItem('userRecords')) || [];
    const updatedRecords = userRecords.map(record => record.email === user.email ? user : record);
    localStorage.setItem('userRecords', JSON.stringify(updatedRecords));
};

const addTask = task => {
    currentUser.tasks.push(task);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserRecords(currentUser);
};

addButton.addEventListener('click', function (e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');
    const startHour = document.getElementById('start-hour');
    const endHour = document.getElementById('end-hour');
    const descriptionInput = document.getElementById('description-input');

    const task = {
        id: Date.now(),
        task: taskInput.value,
        startDate: startDate.value,
        endDate: endDate.value,
        startHour: startHour.value,
        endHour: endHour.value,
        description: descriptionInput.value,
        status: calculateTaskStatus(startDate.value, endDate.value)
    };

    addTask(task);

    this.reset();
});

const calculateTaskStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start) return 'Pendente';
    else if (now >= start && now <= end) return 'Em andamento';
    else if (now > end) return 'Em Atraso';
    return 'Realizada';
};
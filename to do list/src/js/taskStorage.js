let myStorage = window.localStorage;

let tasks = [];

function idGenerator() {
    var timesTamp = new Date();

    var id =
        timesTamp.getHours().toString() +
        timesTamp.getMinutes().toString() +
        timesTamp.getSeconds().toString() +
        timesTamp.getMilliseconds().toString();

    return id;
}


function createTask(taskDescripition) {

    var task = {
        id: idGenerator(),
        data: {
            descripition: taskDescripition
        }
    };

    tasks.push(task);

    myStorage.setItem("tasks", JSON.stringify(tasks));
}


function deleteTask(id) {
    tasks = tasks.filter(task => task.id != id);

    myStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks_str = myStorage.getItem("tasks");

    if (tasks_str) {
        tasks = JSON.parse(tasks_str);
    }
}
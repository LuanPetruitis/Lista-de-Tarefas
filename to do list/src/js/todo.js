loadTasks()

function newTask() {
    var taskDescripition = document.getElementById('newTask').value

    createTask(taskDescripition);

    updateScreen();
}

function updateScreen() {
    var list = "<ul>"

    tasks.forEach((task => {
        list += `<li id-data="${task.id}">${task.data.descripition}  <button class="apagar" onClick="removeTask(this)" id-data="${task.id}">X</button></li> `
    }))

    list += "</ul>";

    document.getElementById('list').innerHTML = list;
    document.getElementById('newTask').value = '';
}


function removeTask(element) {
    tasks = tasks.filter(task => task.id != element.getAttribute("id-data"));

    var id = element.getAttribute("id-data");

    deleteTask(id);
    updateScreen();
}


loadTasks();
updateScreen();
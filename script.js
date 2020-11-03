var ul = document.getElementById('myList');
var li;
var itemId;
var item;

window.addEventListener('load', () => {
    for (let i = 0; i < (localStorage.length + 1); i++) {
        if (localStorage.getItem(i) != null) {
            itemId = ul.childElementCount;
            li = createElement(localStorage.getItem(i), i);
            li.appendChild(createRemoveTaskBtn(itemId));
            ul.appendChild(li);
        }
    }
})

function addTask() {
    if (document.getElementById("task").value != "") {
        item = document.getElementById("task").value
        itemId = ul.childElementCount;
        li = createElement(item, itemId);
        li.appendChild(createRemoveTaskBtn(itemId));
        ul.appendChild(li);
        localStorage.setItem(itemId, item)
    }

}

function removeTask(itemId) {
    for (i = 0; i < ul.children.length; i++) {
        if (ul.children[i].getAttribute("index") == itemId) {
            ul.children[i].remove(localStorage.removeItem(itemId));
        }
    }
}

function createElement(itemValue, itemId) {
    let li = document.createElement('li');
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

function createRemoveTaskBtn() {
    let btn = document.createElement('button');
    btn.setAttribute("onclick", "removeTask(" + itemId + ")");
    btn.innerHTML = "X";
    return btn;
}
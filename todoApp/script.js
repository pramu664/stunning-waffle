
class Task {
    constructor(task, date, time, id) {
        this.task = task;
        this.date = date;
        this.time = time;
        this.id = id;
    }
}

class Storage {
    static getTasks() {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    static setTasks(task) {
        const tasks = Storage.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static createId() {
        const id = Math.random();
        return id;
    }
    static removeTask(el) {
        const tasks = Storage.getTasks();
        tasks.forEach((task, index) => {
            if (task.id == el.id) {
                tasks.splice(index, 1);
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

class UI {
    static displayTasks() {

        const tasks = Storage.getTasks();


        tasks.forEach(task => {
            UI.addTask(task);
        });


    }
    static addTask(task) {
        const elTr = document.createElement('tr');
        elTr.innerHTML =
            `
    <td>${task.task}</td>
    <td>${task.date}</td>
    <td>${task.time}</td>
    <td><button class="btn btn-success remove" id="${task.id}">✓</button><td>
    `
        const elTBody = document.getElementById('taskList');
        elTBody.appendChild(elTr);
    }


    static getDate() {
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
        return date;
    }

    static getTime() {
        const today = new Date();
        const time = `${today.getHours()}:${today.getMinutes()}`
        return time;
    }

    static clearField() {
        document.getElementById('task').value = '';
    }

    static removeTask(el) {
        if (el.classList.contains('remove')) {
            el.parentElement.parentElement.remove();
        }
    }

    static displayMsg(msg, className) {

        const elMsg = document.createElement('div');
        elMsg.className = `alert alert-${className} position-fixed`;
        elMsg.appendChild(document.createTextNode(msg));

        const elContainer = document.querySelector('.container');
        const elHeader = document.querySelector('.header');
        elContainer.insertBefore(elMsg, elHeader);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 1000);

    }
}

document.addEventListener('DOMContentLoaded', () => {
    UI.displayTasks();
});

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();


    const task = document.getElementById('task').value;
    if (task == '') {
        UI.displayMsg('Provide a task', 'danger');
    } else {
        const date = UI.getDate();
        const time = UI.getTime();
        const id = Storage.createId();
        const t = new Task(task, date, time, id);
        UI.addTask(t);
        Storage.setTasks(t);
        UI.clearField();
        UI.displayMsg('Added a task', 'success');
    }

});

document.getElementById('taskList').addEventListener('click', (e) => {
    const elBtn = e.target;
    Storage.removeTask(elBtn);
    UI.removeTask(elBtn);
    UI.displayMsg('Task Completed!', 'success');
});






















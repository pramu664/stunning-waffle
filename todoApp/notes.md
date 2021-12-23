# TASKS APP
Today we are going build a todo app using HTML, and JavaScript.

# GETTING STARTING
We'll need to first set up our folder structure for our project. 
```bash
mkdir tasks
cd tasks
touch index.html script.js
code .
```
First we create a folder. Next we change in to that folder. Next we use touch keyword to create two files called `index.html, script.js`. Finally we open up the current folder inside the visual studio code.

## INITIAL SETUP
First let's start by creating the webpage with useful information.
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Tasks</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.6.1/cerulean/bootstrap.min.css" integrity="sha512-lojUNdOGZXJLeNdWWK4EcsIw7nnpRdi/KQGxKDNNGToPERJzztZlyQ6E/wUvuoNbc1M0TuBiNVBTLxU29zep9g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>

        <script src="script.js"></script>
    </body>
</html>
```
We start by adding the doctype declaration. By doing this we tell browser that we are using the latest version of HTML5.
Next setup the html and language as English.
Next we add the information about the page inside the `head tag`. First we add the character encoding to `UTF-8` and set up the viewport.
Next we give the title as Tasks. Finally we add external css libraries like the font-awesome and bootswatch. we can use these library classes to get icons, style the elements and so on.
Finally we set up the external script inside the body. we give a link to that script file.

## HTML STRUCTURE
Now we need to create the user interface using HTML and bootstrap.
```HTML
<body>
<div class="container mt-5" style="max-width: 60vw">
    <h1 class="display-4 text-center header">
        <i class="fas fa-tasks"></i> Tasks
    </h1>
    <form id="form">
    <div class="form-group">
    <input id="task" type="text" class="form-control" autofocus placeholder="Write a task..." autocomplete="off" />
    <input type="submit" class="btn btn-primary btn-block" value="Add Task">
    </div>
    </form>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Task</th>
                <th>Date</th>
                <th>Time</th> 
                <th></th>
            </tr>
        </thead>
        <tbody>
    </table>
</div>
</body>
```
We created three sections, header, form and table. We start by creating the header we use bootstrap classes to for styles,font-awesome icons to get the task icon.
Next we create the form. Inside the form tag first we include the input and give id,type and classes. Next we setup the submit button.
Next we create the table. we use bootstrap styles to style the table. Finally we group all these sections inside a div called container.

## SETTING UP TIME AND DATE
We'll need to set up two functions that give us the currnt date and the time:
```JavaScript

function getTime() {
    const today = new Date();
    const time = `${today.getHours();}:${today.getMinutes();}`
    return time;
}

function getDate() {
    const today = new date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    return date;
}
```
JavaScript has built in object called `Date`. We used that object to get the date and time information to a variable called today.
Next by using the built in methods of that date object we write two scripts that create a date and time. we assign the values to  variables called date and time.
We are reusing these instructions later in our script so we organize them inside two functions called 'getTime' and 'getDate'. These functions return current the time and the date when we call those functions.

## SETTING UP THE DUMMY DATA
In order to work with the application we'll need to create some dummy data:
```JavaScript
const tasks = [
    {
        task: "Do Laundry",
        date: task.date,
        time: task.time
    },
    {
        task: "Do Workout",
        date: task.date,
        time: task.time
    },
    {
        task: "Study JavaScript",
        date: task.date,
        time: task.time
    }
];
```
We set up some data in key value pairs. so we organized them in objects. The result we were got list of related information. so we organized them inside array. Finally we assign that array in to variable called tasks.

## DISPLAYING THE DUMMY DATA
We'll going to display our data in userinterface
```JavaScript

tasks.forEach(task => {
    addTask.(task);
});

function addTask (task) {
    const elTlRow = document.createElement('tr');
    elTlRow.innerHTML =
    `
    <td>${task.task}</td>
    <td>${task.date}</td>
    <td>${task.time}</td>
    `;
    const elTlBody = document.getElementById('taskList');
    elTlBody.appendChild(elTlRow);
}
```
We first start with the getting the data and representing them as inside table data element.
So we create table row element. Then after that we change the innerHTML to the use as the created data elements.
Next we get the table element that we need to put our data in, so we put our data as an child of the table body.
To make these instructions organize we create a function that have a parameter called task.
we use forEach to loop thorugh the tasks array and pass one task at a time as an argument to the addTask function.

## ORGANZIING ALL THE FUNCTIOS INSIDE A USERINTERFASE
We can use JavaScript class to organized all the functions that we created so far:
```JavaScript
class UI {
    static displayTasks {
        const date = UI.getDate();
        const time = UI.getTime();

        const tasks = [
            {
                task: "Do the Laundry",
                date: task.date,
                time: task.time
            },
            {
                task: "Do the Laundry",
                date: task.date,
                time: task.time
            },
            {
                task: "Do the Laundry",
                date: task.date,
                time: task.time
            }
        ];

        tasks.forEach(task => {
            UI.addTask.(task);
        });
    }

    static addTask (task) {
        const elTlRow = document.createElement('tr');
        elTlRow.innerHTML =
        `
        <td>${task.task}</td>
        <td>${task.date}</td>
        <td>${task.time}</td>
        `;
        const elTlBody =document.getElementById('taskList');
        elTlBody.appendChild(elTlRow);
}

    static getTime() {
        const today = new Date();
        const time = `${today.getHours();}:${today.getMinutes();}`
        return time;
    }

    static getDate() {
        const today = new date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
        return date;
    }  
}
```
First we create a class called `UI`. It stores the functions that we can used to  working with the user interface.
Next we grab our three functions from our script.(`getDate(), getTime(), addTask()`). And we put inside them in the `UI` class block.
If we want to store functions inside a class we want to use `static` keyword. so we remove the `function` keyword and add the `static` keyword.
To call a function inside the class, JavaScript needs to go through the `UI`. So we done that also by putting `UI` inside every function call.

## DISPLAYING THE TASKS
Now we'll need to display the tasks inside our application' user interface.
```JavaScript
document.addEventListener('DOMContentLoaded', () => {
    UI.displayTasks();
});
```
When the DOM loaded to the browser, we call the displayTasks function. That causes to display all the tasks inside the webpage.

## CREATING THE TASK CONSTRUCTOR
We use the object literals only for demostration. so we need to find a way to create instances of a task when user adding tasks though via the input element.
```JavaScript
class Task {
    constructor(task, date, time) {
        this.task = task;
        this.date = date;
        this.time = time;
    }
}
```
We create a constructor class that contains three properties for storing data about task, date and time.

## ADDING TASKS THROUGH THE INPUT FEILD
We'll need to tell JavaScript to add the tasks through the input field in our userinterface.
```JavaScript
document.getElementById('form').addEventListener('submit',(e) => {
    e.preventDefault();

    const task = document.getElementById('task').value;
    const date = UI.getDate();
    const time = UI.getTime();

    const t = new Task(task, date, time);
    UI.addTask(t);
});
```
When the submit event fires we want to run some scripts in order to add a task. 
First we prevent the default submiting by using `preventDefault()` method.
Next we get all the data(task, date, time) about task into a three seperate variables.
Finally we create a new task and provide the data as an arguments. and we give that task as an argument to the `addTask` method.

## CLEARING THE INPUTFIELDS
After adding tasks to the table. we'll need to clear the feild, unless tasks is still there.
```JavaScript
class UI {
    static clearField() {
        document.getElementById('task').value = '';
    }
}
```
First we tell JavaScript to get the task element and clear the field by setting the value property to empty string.
Next we organize that instructions as a static function inside the UI class.so we can reuse that instruction anywhere in our script.

## DELETING THE TASKS
After user complete the task. User want to remove the task. we'll need to implement that functionility to our application.
```JavaScript
class UI {
    static deleteTask(e) {
        const el = e.target;

        if (el.classList.contains('btn')) {
            el.parentElement.parentElement.remove();
            UI.displayAlert('Task done', 'success');
        }
    }
}

document.getElementById('taskList').addEventListener('click', (e) => {
    UI.deleteTask(e);
});
```
First we tell JavaScript to get the element that happend the click event. Next we use that element to find the containing element. Next we call remove() method to remove that element. But we done that if only the element have a class called `btn`.
Next we call the displayAlert method and provide the message and class name as argument.
Next we organize those instructions inside a static function called `deleteTask`.
Finally we call that function providing the event as an argument.

## CONTROLING THE TASKS
Now we'll want to control the task adding:
```JavaScript
if (task === ''){
    UI.displayAlert('Please provide a task!', 'danger');
} else {
    UI.displayAlert('Task added!', 'success');
}

class UI {

    static displayAlert(msg, className) {
        const elDiv = document.createElement('div');

        elDiv.appendChild(document.createTextNode(msg));
        elDiv.className = `alert alert-${className} position-fixed`;

        const elContainer = document.querySelector('.container');
        const elHeader = document.getElementById('header');

        elContainer.insertBefore(elDiv, elHeader);
    }
}
```
To get control the task adding first we start by creating a condition before adding a task. The condition is checking the task value is empty. If it is empty then we want to show a message that indicating to provide a task. else we want to show a success message.
So we deside that we want two static functions. and those functions takes the two argument, the msg and the bootstrap class.
So Inside the static function we give instrunctions to the JavaScript how to do that;
First we create a new div element. 
Next we append a text node and provide the msg as value. Next we add a class name by using the argument.
Next we grab the container element and header element from the DOM.
Finally we insert the div element before to the header element.

## REMOVING THE MESSAGE
Now the message are bundling up. So we'll need to remove those messages:
```JavaScript
setTimeout(() => {
    document.querySelector('alert').remove();
}, 1000)
```
First we select the message and call `remove()` method. But we don't want to remove the message immidiately. So we set a one second timeout before removing the message.

## SETTING UP A STORAGE FOR THE TASKS
We can use the browser's built in local storage to store our application data. Doing that we can reuse those data whenever what we want.
LocalStorage only store data in string format. So we need to convert our data into string format before storing the data.
```JavaScript
class Storage() {

    static getTasks(){
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    static setTasks(task) {
        const tasks = storage.getTasks();
        tasks.push(task);
        localStorageSetItem('tasks', JSON.stringify(tasks));
    } 
}
```
First we write the instructions to working with the localStorage. Most important instructions are getting the data from the localStorage and putting that data into local Storage.
When we getting data we need to parse those data using `JSON.parse()`, and when we setting data we need to convert those data in to string format using `JSON.stringify()`;
Local storage can be in two conditions. One is that storage can be empty storage, and other is that localStorage contains data,To check the storage is empty we use if else statement,
so when it is empty we create array and assign that array to a variable called `tasks`. Otherwise when it is not empty we get that data into a that same array.
finally we return that array.
we group all these instructions in a static function. And we create a new class called `Storage` to store the functions that happented to be working on the localStorage.
Next we write scripts about how to setting up newely created tasks in to the localStorage. First we get the tasks array. then we push individual task into that array. Next we set updated array back in the localStorage.
So in this case task is coming to the scripts. so we group all these instructions inside static function. We set up a parameter to indicate the task. We also give a name called `setTasks` By giving a name we can call these instructions later in our scripts.

## USING THE STORAGE
Now we'll need to use our storage functions.
```JavaScript
const tasks = Storage.getTasks();
```
We removed the dummy data(object literals) and the two functin calls to  getting the time and date in the begginning of the Class UI. And we tell JavaScript to get the tasks from the Storage. 
If we save and reload the page now the previous tasks are no longer in here. Because now we are using the localStorage. 
To add tasks to the localStorage we use `Storage.setTasks(t)` inside the function call in the `submit` event. So now our application can store data.

## REMOVING TASKS FROM THE STORAGE
To remove tasks from the storage, JavaScript need a way to identify which task to remove. So we need to provide a unique identification to each individual tasks.
After that we can instruct JavaScript to remove the task.
```JavaScript
    static removeTask(id) { // new
        const tasks = Storage.getTasks();
        tasks.forEach((task, index) => {
            if (task.id == id) {
                tasks.splice(index, 1);
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
```
First we create function called removeTask inside the storage class. It takes the unique id as an argument.
Next we get all the tasks and loop over each of these tasks and calling a function. we provide the task and the index number to the function as an arguments.
Next we checks the id and the task's stored id is matched. If it is we remove that one task by using `splice()` method. we give the index number and the number of items to removed from the array.
Finally we set up the updated array inside the localStorage.

## SETTING UP THE UNIQUE ID
Finally we want to setting up the ID:
```JavaScript
class Storage {
    static setId() {
        const id = Math.random();
        return id;
    }
}

class Task {
    constructor(task, date, time, id) { // new
        this.task = task;
        this.date = date;
        this.time = time;
        this.id = id; // new
}

document.getElementById('form').addEventListener('submit', (e) => {
    const id = Storage.setId(); //new

    const t = new Task(task, date, time, id); // new
});

document.getElementById('taskList').addEventListener('click', (e) => {
    UI.deleteTask(e);
    Storage.removeTask(e.target.id); // new
    UI.displayAlert('Task done', 'success');
});


```
First we set up a static function inside the Storage class. It basically create a random number using  `Math.random()` method and return that number.
Next we updated the Task constructor to store new property called `id`.
Next we add a new instruction inside the submit event listener. we call the setID() method and save that inside a variable called id.
Next we pass that id in to the newely creating task.
Finally inside the submit event listener we call the removeTask and pass in the element id by using `e.target.id` as an argument.

## PUTTING ALL TOGETHER
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tasks</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.6.1/cerulean/bootstrap.min.css"
        integrity="sha512-lojUNdOGZXJLeNdWWK4EcsIw7nnpRdi/KQGxKDNNGToPERJzztZlyQ6E/wUvuoNbc1M0TuBiNVBTLxU29zep9g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="container mt-4">
        <h1 class="display-4 text-center header">
            <i class="fas fa-tasks"></i> Tasks
        </h1>
        <form id="form">
            <div class="form-group">
                <input type="text" id="task" class="form-control" autofocus placeholder="Write a task..."
                    autocomplete="off" />
            </div>
            <input type="submit" value="Add Task" class="btn btn-primary btn-block" />
        </form>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="taskList"></tbody>
        </table>
    </div>

    <script src="script.js"></script>
</body>

</html>
```
```JavaScript
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

    static setId() {
        const id = Math.random();
        return id;
    }

    static removeTask(id) {
        const tasks = Storage.getTasks();
        tasks.forEach((task, index) => {
            if (task.id == id) {
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
        const elTasks = document.getElementById('taskList');
        const elTr = document.createElement('tr');
        elTr.innerHTML = `
        <td>${task.task}</td>
        <td>${task.date}</td>
        <td>${task.time}</td>
        <td><button class="btn btn-success" id="${task.id}">✓</button></td>
        `;
        elTasks.appendChild(elTr);
    }

    static getDate() {
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
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

    static deleteTask(e) {
        const el = e.target;
        if (el.classList.contains('btn')) {
            el.parentElement.parentElement.remove();
            UI.displayAlert('Task done', 'success');
        }
    }

    static displayAlert(msg, className) {
        const elMsg = document.createElement('div');

        elMsg.appendChild(document.createTextNode(msg));
        elMsg.className = `alert alert-${className} position-fixed`

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
    if (task === '') {
        UI.displayAlert('Provide a Task', 'danger');
    } else {
        const date = UI.getDate();
        const time = UI.getTime();
        const id = Storage.setId();

        const t = new Task(task, date, time, id);
        UI.addTask(t);
        Storage.setTasks(t);
        UI.clearField();
        UI.displayAlert('Task Added', 'success');
    }

});

document.getElementById('taskList').addEventListener('click', (e) => {
    UI.deleteTask(e);
    Storage.removeTask(e.target.id);
});
```

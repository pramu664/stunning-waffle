const elTime = document.getElementById('time');
const elGreeting = document.getElementById('greeting');
const elUserName = document.getElementById('name');
const elHighlight = document.getElementById('highlight');

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();

    const amPm = hour >= 13 ? 'PM' : 'AM'

    hour = hour % 12 || 12;

    elTime.innerHTML = `${hour}<span>:</span>${addName(min)} ${amPm}`;

    setTimeout(showTime, 1000);

}

function addName(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function addGreetingTextAndBg() {
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12) {
        elGreeting.textContent = "Good Morning";
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";

    } else if (hour < 18) {
        elGreeting.textContent = "Good Afternoon";
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";

    } else {
        elGreeting.textContent = "Good Evening";
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        elUserName.textContent = "[Enter Name]";
    } else {
        elUserName.textContent = localStorage.getItem('name');
    }
}

function getHighlight() {
    if (localStorage.getItem('highlight') === null) {
        elHighlight.textContent = "[Enter Highlight]";
    } else {
        elUserName.textContent = localStorage.getItem('highlight');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.keycode == 13 || e.which == 13) {
            localStorage.setItem('name', e.target.innerText);
            elUserName.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}


function setHighlight(e) {
    if (e.type === "keypress") {
        if (e.keycode == 13 || e.which == 13) {
            localStorage.setItem('highlight', e.target.innerText);
            elHighlight.blur();
        }
    } else {
        localStorage.setItem('highlight', e.target.innerText);
    }
}

elHighlight.addEventListener('keypress', setHighlight);
elHighlight.addEventListener('blur', setHighlight);
elUserName.addEventListener('keypress', setName);
elUserName.addEventListener('blur', setName);

getHighlight();
getName()
addGreetingTextAndBg();
showTime();
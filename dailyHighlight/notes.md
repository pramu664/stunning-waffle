## DAILY HIGHLIGHT
In this project we'll be going to build a landing page that more like the chrome extention called momentum. The original video about how to do this in Traversy Media Youtube channel. And I am follow along with that video and these are my notes. And I also making my own screen recording for this project.

I am doing this for my own personal satisfaction and feel free to follow along with me and learn something new.

## DIRECTORY STRUCTURE
We'll need three images. I am using the images that Brad's using. You can use a different images if you like. It is not going go change anything other than the look and feel.
We'll need a folder to store all the code files and images.
```bash
mkdir dynamicLandingPage
cd dynamicLandingPage
mkdir js css img
touch index.html
```
We first start by making a directory called dynamicLandingPage, we are using this directory as our root folder. Inside this folder we make three directorys in order to store JavaScript, CSS and images. Finally we create a file called index.html.

## INITIAL HTML
Now we need to focus on writing some html inside the index.html page. We just only need to focuson to add important meta tags, links to our stylesheet and to our JavaScript. 
```HTML

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width />
		<title>Daily Highlight</title>
		<link rel="stylesheet" href="css/style.css" />
	</head>
	<body>


		<script src="js/script.js" />
	</body>
</html>
```
First we start by adding the doctype declartion. It's just saying to the browser that we are using newest version of HTML. That is HTML5.
Next we add the meta tag. First one for the character encoding and section one for to the viewport. You can Just copy paste these tags.
And we add a link tags to our style.css file using link tag. Finally in the body we add our script tag and we refer that to external script file.

## STRUCTURE
Let's design the structure our application. First we'll want to show the user's the time in large, In next line we want to tell them the greeting message like 'good morning'. Finally we want to ask them a question about what is their daily highlight.
```HTML
<time id="time">10:25 AM</time>
<h1>
	<span id="greeting">Good Morning!</span>
</h1>
<h2>What is your daily highlight for today?</h2>
<h2	contenteditable="true" id="highlight">Play Dark souls</h2>
```
first write the structure using just only the content. we provide the time, we greet the user, we ask the daily hightlight of the user. Next we mark up the content using HTML. we use time markup for the time. and h1 for the greetings and h2 for the question and the daily highlight.
Next we add additional information to our markup by adding attributes.
First we add id for the time tag call time. Next we add a id called greeting for the span element. and finally we add a id called hightlight for the second h2 tag. And also we set the contenteditable to true. 


## ADDING THE BASIC STYLING
Now we'll need to reset our page and add some styles for the body of our html page.

```CSS
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: 'Quicksand', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 100vh;
	color: #333;
}

#time {
	 font-size: 8rem;
}

h1 {
	margin-bottom: 2rem;
}

h2 {
	margin-bottom: 0.5rem;
	opacity: 0.6;
}

@media(max-width: 700px) {
	#time {
		font-size:6rem;
	}
}
```
In here we use flexbox to centering the content inside the body. Next we add some margin and padding in between h1 and h2.
Finally we add a media query for smaller screens, that just only changing the font-size to 6rem.

## SHOW TIME USING JAVASCRIPT
Now we need to tell JavaScript to show the time to the users. To do that we need to give detailed instructions. First we'll need to tell JavaScript to get the time. Next figure out the am and pm using the hour. Next make the time 12 hour format. and add the time to the time element. These instructions needs to run every one second because time update every one second. So we need to organized the instructions inside a function.
```JavaScript
elTime = document.getElementById('time');


function showTime() {

	let today = new Date();
	let hour = today.getHours();
	let min = today.getMinutes();

	const amPm = hour >= 12 ? "PM" : "AM";

	hour = hour % 12 || 12;

	elTime.innerHTML = `${hour}<span>:</span>${min} ${amPm}`;

	setTimeout(showTime, 1000);
}

showTime();
```
First we tell JS to get a today using date constructor. next we get the hours and minutes to a seperate variables. Next we use somewhat like if statement to figure out the am or pm. Basically if the hour is larger than the 12 then assign a string PM to the variable called amPm otherwise assign am.
Next we convert the 24 hour format to 12 hour format by using modulus operator. The reson that we used or operator here when the hour is 12 we don't need to show the user 0(12%12=0) we want to show 12,so we use or operator to say if the value is zero go ahead and return 12. We change the innerHTML of the elTime to the time of the day.
Finally we call setTimeout function every 1000 miliseconds. That calling these instuction every one second.

## ADDING A ZERO 
Now the problem is that time range 1 to 10 not showing the zero. We'll need to way to add that zero.
```JavaScript
function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + 10; 
}

elTime.innerHTML = `${hour}<span>:</span>${addZero(min)}`;
```
addZero function takes one argument, argument type needs to be a string and returns a number. If the number is less than 10 then it returns that number with added zero, otherwise(number is greater than 10) it returns just the number without prefixing a zero.
`parseInt()` used to convert the string in to a decimal number (2nd argument 10 stands for decimal) so we can compare using operators.
We use this function to update our current script that changing the innerHTML of the time tag. we give the min as an argument(string) to the addZero function.

## ADDING GREETING TEXT AND BACKGROUND IMAGES DEPENDING ON THE SESSION
Now we'll need to add different greetings text and background images depending on time period. 
```JavaScript
function addBgT() {
	let today = new Date();
	let hour = today.getHours();
	if (hour < 12) {
		// Morning
		elGreeting.textContent = 'Good Morning';	
		document.body.style.backgroundImage = "url('../img/morning.jpg')";
		document.body.style.backgroundPosition = "center center";
		document.body.style.backgroundSize = "cover";
	} else if (hour < 18) {
		// Afternoon
		document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
		elGreeting.textContent = 'Good Afternoon';
		document.body.style.backgroundPosition = "center center";
		document.body.style.backgroundSize = "cover";
	} else {
		// Evening
		document.body.style.backgroundImage = "url('../img/evening.jpg')";
		elEvening.textContent = 'Good Evening';
		document.body.style.backgroundPosition = "center center";
		document.body.style.backgroundSize = "cover";
	}
}
addBgT();
```
First we get the date using Date() constructor. and get the hour. That's all what we need if you not get the element go ahead and get the greeting element.
Next we set up the conditions that related to morning, afternoon and evening. We know that less than 12 means morning period, less than 18 (6PM) is afternoon and other period is just evening. We are not setting a condition for a night. It bit silly to say good night in the screen.
Every condition we just tell JavaScript to update the text and change the background image. 


## GETTING THE NAME AND THE HIGHLIGHT OF THE USER
Now we can use localStorage for our getting the data about user. what is his name and what is his highlight? If he hasn't got any we just instruct them to enter a the name and highlight.
```JavaScript
if (localStorage.getItem('name') === null) {
	elName.textContent = ' [Enter Name]';
} else {
	elName.textContent = localStorage.getItem('name');
}

if (localStorage.getItem('highlight') === null) {
	elHighlight.textContent = ' [Enter Highlight]';
} else {
	elHighlight.textContent = localStorage.getItem('highlight');
}
```
First we start by checking the localStorage has any value related to a key called *name*. If it hasn't got any value we set the default to `[Enter name]`. If got any value then we set that value as the textContent of the element. We done the same thing for the *highlight*.

## STORING THE NAME AND THE HIGHLIGHT OF THE USER INSIDE THE LOCAL STORAGE
Once when the user press the enter key after adding name or highlight we need to listen for an event called `keypress` and `blur` event. we also need to make sure the key user pressed is the *Enter* key of the keyboard. Once that happend we'll need to tell JavaScript to add the name and the hightlight of the user to the localStorage.

```JavaScript
function setName(e) {
	if (e.type === 'keypress') {
		if (e.keycode == 13 || e.which == 13) {
			locatStorage.setItem('name', e.target.innerText);
			e.blur();
		}
	} else {
		localStorage.setItem('name', e.target.innerText);
	}
}

function setHightlight(e) {
	if (e.type === "keypress") {
		if (e.keycode == 13 || e.which == 13) {
			localStorage.setItem('name', e.target.innerText);
			elName.blur();
		}
	} else {
		localStorage.setItem('name', e.target.innerText);
	}
}

elHighlight.addEventListener('keypress', setHightligh);
elHightlight.addEventListener('blur', setHightlight);
elName.addEventListener('keypress', setName);
elName.addEventListener('blur', setName);
```
First we set up four event listener two for name element and two for hightlight element. We just listening for keypress event and blur event. After event triggers we make sure the event type is keypress if not that is blur event so we add the innerText of the elements into localStorage.
We also check if the keycode matches to the enter key's keycode(13). If it is then we add the innerText to the localStorage.

## PUTTING ALL TOGETHER
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
	<title>Daily Highlight</title>
	<link rel="stylesheet" href="css/style.css" />
</head>

<body>
	<time id="time">11:05 AM</time>
	<h1><span id="greeting"></span> <span contenteditable="true" id="name"> Pramuditha</span></h1>
	<div class="focusBox">
		<h2>What is your daily highlight for today?</h2>
		<h2 contenteditable="true" id="highlight" class="highlight">Developing a beautiful web page</h2>
	</div>
	<script src="js/script.js"></script>
</body>

</html>
```
```CSS
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0
}

body {
	font-family: "Quicksand", sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 100vh;
	color: #fff;
}

#time {
	font-size: 8rem;
	font-weight: bold;
}

.focusBox {
	margin-top: 6rem;
}

.highlight {
	margin-top: 2rem;
}

@media (max-width: 700px) {
	#time {
		font-size: 6rem;
	}
}

```
```JavaScript
const elTime = document.getElementById('time');
const elGreeting = document.getElementById('greeting');
const elName = document.getElementById('name');
const elHighlight = document.getElementById('highlight');


function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    const amPm = hour >= 12 ? 'PM' : 'AM'
    hour = hour % 12 || 12;
    elTime.innerHTML = `${hour}<span>:<span>${addZero(min)} ${amPm}`;
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setGreetingAndBackground() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
        elGreeting.textContent = "Good Morning";
        document.body.style.backgroundImage = "url('../img/morning.jpg') ";
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
        document.body.style.backgroundPostion = "center center";
        document.body.style.backgroundSize = "cover";
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode == 13 || e.which == 13) {
            localStorage.setItem('name', e.target.innerText);
            elName.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function setHighlight(e) {
    if (e.type === 'keypress') {
        if (e.keyCode == 13 || e.which == 13) {
            localStorage.setItem('highlight', e.target.innerText);
            elHighlight.blur();
        }
    } else {
        localStorage.setItem('highlight', e.target.innerText);
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        elName.textContent = " [Enter Name]";
    } else {
        elName.textContent = localStorage.getItem('name');
    }
}

function getHighlight() {
    if (localStorage.getItem('highlight') === null) {
        elHighlight.textContent = '[Enter highlight]';
    } else {
        elHighlight.textContent = localStorage.getItem('highlight');
    }
}

showTime();
getHighlight();
getName();
setGreetingAndBackground();

elHighlight.addEventListener('keypress', setHighlight);
elHighlight.addEventListener('blur', setHighlight);
elName.addEventListener('keypress', setName);
elName.addEventListener('blur', setName);

```

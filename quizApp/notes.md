# Quiz app
We are going to build quiz app using modern JavaScript, HTML and CSS.

## Initial HTML setup
Let's start with Creating the initial HTML page.
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quiz App</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <!-- Structure goes here -->
        <script src="script.js">
    </body>
</html>
```
First we say to the browser that we are using modern HTML5 by declaring the doctype tag. Next we add the html tag and add a attribute called lang to indicate that we are using English as the language of our page. Next we define two meta tags, title and link tag to the styles.css file. Finally we add the script tag inside the body.

## DEFINING THE STRUTURE OF THE APPLICATION
We will need to struture question, four answers buttons, start button and next button.
```HTML
<div class="container">
    <div id="question-container" class="hide">
        <div id="question">Question</div>
        <div class="btn-grid" id="answer-buttons">
            <button class="btn">Answer 1</button>
            <button class="btn">Answer 2</button>
            <button class="btn">Answer 3</button>
            <button class="btn">Answer 4</button>
        </div>
    </div>
    <div id="controls">
        <button id="start-btn" class="start-btn btn">Start</button>
        <button id="next-btn" class="next-btn  btn hide">Next</button>
    </div>
</div>
```
First we create four button elements for our answers. we give every one of the button a class name called btn. Then we group those button insdie a div. and we give that class name called btn-grid and also we give id called answer-buttons.
Next we create a div tag for our question. and we only give a id called question. Then we group that question and the buttons inside  a div. we give that div a id called question-container and also we give a class name called hide.
Next we create two buttons for the start and next buttons. we give a id for the start button called start-btn and two class names called start-btn and btn. we give a id for the next button called next-btn and three classes called next-btn btn and hide. We group those buttons inside a div. we give a class name called controls.
Finally we group all of the elements inside a div. we give a class name called container.
Id's can be selected in our JavaScript and classes can be styles inside our CSS.

## INITIAL STYLES
Now we'll need to set up the initial stylesheet. we'll need to include the padding and border to when we are defining the width and height to our element.  Add any font we like. and make the elements margin and padding to zero and also centering the entire container. We also need to set up the colors.
```CSS
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
*, *::before, *::after {
    box-sizing: border-box;
    font-family: font-family: 'Lato', sans-serif;
}
:root {
    --hue-neutral: 200;
    --hue-wrong: 0;
    --hue-correct: 145;
}

body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    --hue: var(--hue-neutral);
    background-color: hsl(var(--hue), 100%, 20%);

}
body.correct {
    --hue: var(--hue-correct);
}
body.wrong {
    --hue: var(--hue-wronge);
}
```
First thing we are going to do is to find a font. we use fonts.google.com to find a font. Once we find the font we can add that font to the entire html element, and also before and after elements. so we set up the font-family property first. Next we make the entire elements(after and before included) to border-box by setting up the box-sizing property to border box. And also we make the every elements inside the body to use margin zero and padding zero. Because we don't need to make the full html elements margin and padding to zero.

Next we want to center the container. Before doing that we set up the width and height to 100vh and 100vw. So now we know that our body is going to get 100% viport height and 100% viewport width. Next we center the container by making our body flex. and setting up the justify-content and align-items property to center.

Now we want to deside the colors we are going to using in our entire application. Next we want to add a background color body. we like to set up three colors like neutral, wrong and correct colors. netural for the body, wrong for the wrong answers and correct for the currect answers. so we set up our variables inside the root element. 

When the body has a class called *currect* we want to change the body background color to green color and also when the body has a class called *wrong* we want to change the body background color to red. we can add that class using JavaScript. Before doing that we want to specify styling to that specifc states of our body. But if we want to use hsl colors specifying those colors can be repetitive. So we are using clever trick here. we set up a variable call hue and assign the hue-nuetral variables value to our hue variable in the body tag.
Next we use that variable to specify the background color in specifc states in our body(Having different classes). Now instead of redifining the background-color using hsl we can just only change the value of --hue variable.

## STYLING THE CONTAINER
Now we need to style our container. 
```CSS
.container {
    width: 100%;
    max-width: 80%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 2px;
    padding: 10px;
}
```
First we set up the width to be 100%. so that causes our container to get the entire width of the container(body). we don't want to do that so we limit the width to 80%. 

Next we set up white background and border radius. Next we set up box shadow. we set up the horizontal off set and vertical offset to zero. and we add a 10px blur. and we add 2px spread.

Finally we add 10px padding in between text and border.


## CREATING THE BUTTON GRID
Now we'll need to make our button appear more like two by two grid.
```CSS
.btn-grid {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
    margin: 20px 0;
}
```
    When we set up the display of our btn-grid to grid. All the buttons are going to taken our from the normal flow and appear single column layout.But we don't want single column layout so we say that every column needs two grid items and there width need to be automatically adjesting.
    After we give a gap to all the grid items. Finally we give 20px margin top and bottom to the grid to seperate out the other two elements.

## CHANGING THE STYLE OF THE ANSWERS
Now we need to change the style of the answers by defining new class. Before doing that we'll need to style the answer buttons.
```CSS
.btn {
    --hue: var(--hue-neutral);
    background-color: hsl(var(--hue), 100%, 50%);
    border: hsl(var(--hue), 100%, 30%);
    padding: 5px 10px;
    color: #fff;
    outline: none;
}
.btn:hover {
    border-color: black;
}
.btn.correct {
    --hue: var(--hue-correct);
    color: black;
}
.btn.wrong {
    --hue: var(--hue-wrong);
    color: black;
}
```
First we setup a new variable called hue and assign a value of hue-neutral. Then we define the border and background color using that value. we tweak some saturation and lightness to make different from the background. Next we add a border-radius, padding and set the font color to white.
And finally we make the outline to none.
Next when our button in hover state we change the border color to black.
Next when any button that have a class called correct do the following styling. and any class that have a class called wronge do the following styling.

## STYLING THE START AND NEXT BUTTONS
Now let's go and style the start and next buttons:
```CSS
.start-btn, .next-btn {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 20px;
}
.controls {
    display: flex;
    justify-content: center;
    align-items: center;
}
.hide {
    display: hide;
}
```
We select the start and next btn and set the font-size property value to 1.5rem. and then we set the font-weight property value to bold. And we set the padding to 10px top and bottom and 20px left and right.
Next we select the div that containing the two buttons. and we set the display property to flex. and justify-content and align-items to center. By doing this we make two buttons center within the container.
Next we select the elements that have a class called hide(All the buttons excluding the start button) set the display property to hide.

## STARTING THE APP
Now we'll need to tell javaScript hide the start button when the start button is clicked. Then show the next question.
```JavaScript
const startButtonEl = document.getElementById('start');
const questionsContainerEl = document.getElementById('question-container');
const answerButtonEl = document.querySelector('.btn-grid');

const start = () => {
    startButton.classList.add('hide');
    questionsContainerEl.remove('hide');
}

startButtonEl.addEventListener('click', start);
```
First thing we need to tell the javaScript to hide the start button. we done that by getting the start button and adding the new class to the classList property. Next instruction is need to be show the question container. we done that by calling remove method on the question container. We need to reuse these two instructions over and over when we clicking the startButton. so we put those two instructions inside a function and we gave a name called start. Finally we set up a event listener to the start button to call every time start button is clicked.

## CREATING THE QUESTIONS
We use objects to model real world concepts. In this case we want to model a question. Let' do that now:
```JavaScript
const questions = [
    {
        question: 'what is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '5', correct: false}
        ]
    },
]
```
Each question have question, and a answer. each answer have the answer text and the correctness of the answer.

## MAKING THE QUESTIONS SHUFFLE
We don't need to come same question over and over in similar order. we need to shuffle the questions.
```JavaScript
let shuffeldQuestions, currentQuestionIndex;
// Put this instuction inside the start function
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;

```
We tell JavaScript to shuffled our questions by using sort method then assign that array to a variable called shuffeldQuestions. This instruction also needs to called repetedly everytime someone clicking the start button. so we should put that instruction on start function.
To get easily question we set a variable called currentQuestionIndex and assign value 0 to it.

## SHOWING THE QUESTIONS
Now we need to tell JavaScript to show the question one. and two and so on.
```JavaScript
const questionEl = document.getElementById('question');

function setnextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
}
    

```
Before showing the question we need to get the question. So first we tell javaScript to get the question. Before showing the question we also need to tell javaScript to get the question and answer elements from the DOM. Now we know the instrunctions. we need to orgrnize those instruction that actually make sence. so now every time when the user click the button we run some instructions like hide the start and show the quection elements and also shuffle the questions. 
We can organize the code that choosing a question from shuffeldQuestion array in to a function. and also we can organize the code that chnging the innerText of the question element on another function called showQuestion.
We can place our querying element instruction on top of our page.

## ADDING ANSWERS AS BUTTONS
Now we need to tell javaScript take a answer from the question and add that answer to the button element and append to the answer area on the document. 
```JavaScript
questions.answers.forEach(answer => {
    const buttonEl = document.createElement('button');
    buttonEl.innerText = answer.text;
    buttonEl.classList.add('btn');
    answerButtonEl.append(buttonEl);
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
});
```
First we tell JavaScript to loop through the answers array. Then tell javaScript to create a button element and assign it to the variabel called buttonEl. Next we tell JS to change that button element inner text to the answer's text. Next we tell JS to add a the btn class styles. and next we tell JavaScript to check if any button object's answer property to true. If it is then add a data attribute to that element called true and give the value as true. Then we said JavaScript to plug the button in to the answerButtonEl.

## REMOVING THE OLD ANSWER BUTTONS
Now we need to tell JavaScript to remove the old answer buttons elements.
```JavaScript
// call this function inside next question function
const resetState = () => {
    document.getElementById('next').classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
```
So in here we tell JavaScript to remove the child of the answerButtonsElement. Answer button have multiple childs so we need to use a while loop to remove all the child. And also we tell JavaScript to hide the next button in this moment of the game. we group these two instructions inside a function called resetState.
We can use these two instuctions every time next question is display. so we need to put theis function inside next question function.

## ADDING SELECT ANSWER FUNCTIONALIGY
Now what we need to do is to add the functionality that we can select and answer and get feedback.
```JavaScript
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.childern).forEach(button => {
    setStatusClass(button, button.dataset.correct); 
    })
}
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct === 'true') {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function ClearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wronge');
}

// Put inside the show question function
buttonEl.addEventListener('click', selectAnswer);
```
First we create a function called selectAnswer and pass the event object to that function. so we use that event object to get the target element. after that we get the data attribute value to a variable called correct. After that we pass that value and the body element to setStatusClass function. Next we get all the children of our answerButtonsElement and make them array using Array.from() method. then we use forEach() to loop over the elements. Next we call the setStatusClass function and pass the button and the data attribute value.
In the setStatus function we take the element and the data attribute value. first we clear any any class if they have. Next we check if the correct has a true string then we add a class to that element called correct and else we add a class called wrong.
Finally we add evenListner to the buttons and put inside the show question function.

## WORKING WITH THE NEXT BUTTON
Now we need to add the next button to our script:
```JavaScript
// Add this to the select answer funcion.
document.querySelecotr('#next').remove('hide');

document.querySelector('#next').addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

// answer function
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
} else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
}
```
First we select the next button and remove the hide class. This instruction needs to be added to the answer function.
Next we again select the next button and add a click event listener. so in the anonymous function we increment the currentQuestionIndex value and we call the setNext question function.
We said to the javaScript to fist check the length of the shuffeld questions array. if the length is greater than the current question index. then remove the hide class from the next button. otherwise chenge the startbutton inner text to the restart and remove the hide class on start button.

## PUTTING ALL TOGETHER
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quiz App</title>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <div class="container">
        <div>
            <div id="question-container" class="hide">
                <div id="question">Question</div>
                <div class="btn-grid">
                    <button class="btn">Answer 1</button>
                    <button class="btn">Answer 1</button>
                    <button class="btn">Answer 1</button>
                    <button class="btn">Answer 1</button>
                </div>
            </div>
        </div>
        <div class="controls">
            <button class="start-btn btn" id="start">Start</button>
            <button class="next-btn btn hide" id="next">Next</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>
```
```CSS
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

*, *::before, *::after {
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    box-sizing: border-box;
}

:root {
    --hue-neutral: 200;
    --hue-wrong: 0;
    --hue-correct: 145;
}

body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    --hue: var(--hue-neutral);
    background-color: hsl(var(--hue), 100%, 20%);
}

body.correct {
    --hue: var(--hue-correct);
}

body.wrong {
    --hue: var(--hue-wrong);
}

.container {
    width: 100%;
    max-width: 80%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 2px;
    padding: 10px;
}

.btn-grid {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
    margin: 20px 0;
}

.btn {
    --hue: var(--hue-neutral);
    background-color: hsl(var(--hue), 100%, 50%);
    border: 1px solid #fff;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
    color: #fff;
}
.btn:hover {
    border-color: black;
}

.btn.correct {
  --hue: var(--hue-correct);
  color: black;
}

.btn.wrong {
  --hue: var(--hue-wrong);
}
.start-btn, .next-btn {
    font-size: 1.2rem;
    padding: 10px 20px;
    font-weight: bold;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
}

.hide {
    display: none;
}
```
```JavaScript
const startButton = document.getElementById('start');
const questionsContainingEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonsElement = document.querySelector('.btn-grid');
let shuffledQuestions, currentQuestionIndex;

const nextButton = document.querySelector('#next');

document.querySelector('#next').addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

const questions = [
    {
        question: 'what is 2 + 2?',
        answers: [
            { text: '4', correct: 'true' },
            { text: '5', correct: 'false' }
        ]
    },
    {
        question: "what is 3 * 7?",
        answers: [
            { text: '21', correct: 'true' },
            { text: '4', correct: 'false' },
            { text: '45', correct: 'false' }
        ]
    }

]


const start = () => {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    questionsContainingEl.classList.remove('hide');
    currentQuestionIndex = 0;
    setNextQuestion();
}


function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const buttonEl = document.createElement('button');
        buttonEl.innerText = answer.text
        buttonEl.classList.add('btn');
        if (answer.correct) {
            buttonEl.dataset.correct = answer.correct;
        }
        answerButtonsElement.append(buttonEl);
        buttonEl.addEventListener('click', selectAnswer);
    });
}


const resetState = () => {
    clearStatusClass(document.body);
    document.getElementById('next').classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    console.log(correct);
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        console.log(button);
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct === "true") {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


startButton.addEventListener('click', start);
```
const startBtnEl = document.querySelector('.startBtn');
const nextBtnEl = document.querySelector('.nextBtn');
const questionEl = document.querySelector('.question');
const questionContainerEl = document.querySelector('.questionContainer');
const answerButtonsEl = document.querySelector('.btn-grid');

let shuffledQuestions;
let index;

const questionsList = [
    {
        name: 'What is 2 + 7?',
        answers: [
            { name: '9', correct: true },
            { name: '10', correct: false }
        ]
    },
    {
        name: "What is 1 + 8?",
        answers: [
            { name: '2', correct: false },
            { name: '9', correct: true }
        ]
    }
]




function startGame() {
    shuffledQuestions = questionsList.sort(() => Math.random() - 0.5);
    questionContainerEl.classList.remove('hide');
    startBtnEl.classList.add('hide');
    index = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetStatus();
    showQuestion(shuffledQuestions[index])
}

function showQuestion(question) {
    questionEl.innerText = question.name;
    question.answers.forEach(answer => {
        const btnEl = document.createElement('button');
        btnEl.innerText = answer.name;
        btnEl.classList.add('btn');
        answerButtonsEl.append(btnEl);
        if (answer.correct) {
            btnEl.dataset.correct = answer.correct;
        }
        btnEl.addEventListener('click', selectAnswer);
    });

}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(element => {
        setStatusClass(element, element.dataset.correct);
    })
    if (shuffledQuestions.length > index + 1) {
        nextBtnEl.classList.remove('hide');
    } else {
        startBtnEl.innerText = 'Restart';
        startBtnEl.classList.remove('hide');
        nextBtnEl.classList.add('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function resetStatus() {
    clearStatusClass(document.body);
    nextBtnEl.classList.add('hide');
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

startBtnEl.addEventListener('click', startGame);
nextBtnEl.addEventListener('click', () => {
    index++;
    setNextQuestion();
})



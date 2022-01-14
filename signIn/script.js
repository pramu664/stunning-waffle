const elContainer = document.getElementById('container');
console.log(elContainer);
const elSignUp = document.getElementById('signUp');
console.log(elSignUp)
const elSignIn = document.getElementById('signIn');
console.log(elSignIn);


elSignUp.addEventListener('click', () => {
    elContainer.classList.add('right-pannel-active');
});

elSignIn.addEventListener('click', () => {
    elContainer.classList.remove('right-pannel-active');
});
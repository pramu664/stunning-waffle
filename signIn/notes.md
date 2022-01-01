# SIGNUP FORM
we will going to build a sign up form now. 

## DIRECTORY STRUCTURE
First we'll need to create the directory structure for this project.

```bash
mkdir signUp
cd signUp
touch index.html style.css script.js

```
First we create a directory called signUp. This directory is the container for our project files.
Next we change into that directory and make three files called index.html style.css and script.js
Finally we open the direcotry inside the vsCode by using `code .` command.

## INITIAL HTML 
Now we'll need to create the initial HTML page. In this page we need to give important information about our page to the browser.

```HTML
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=divice-width, initial-scale=1.0" />
		<title>SignUp Form</title>
		<link rel="stylesheet" href="styles.css" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	</head>
	<body>


		<script src="script.js"></script>
	</body>
</html>

```
First we add the doctype declaration. Next we add the html element. Inside the html element we first create the head tag. Inside head tag we add the meta tags about charset and viewport. Next we add the title for our webpage. Next we add links to our stylesheet and external stylesheet called *font-awesome*.
Next we add the body tag. Inside the body tag we add the script tag and refer to the external script called script.js.


## APPLICATION STRUCTURE
Now we'll need to create the structure for the sign up and sign in form.
```html
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account<h1>
			<div class="social-containers">
				<a href="#"><i class= "fab fa-facebook"></i></a>
				<a href="#"><i class="fab fa-google"></i><a/>
				<a href="#"><i class="fab fa-linkedin"></i></a>
			</div>"
			<span>or use your email for registrataion</span>
			<input type="text" placeholder="Name"/>
			<input type="email" "placeholder="Email"/>
			<input type="password"placeholder="Password""/>
			<button>Sign up</button>
		</form>
	</div>


	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<a href="#"><i class="fab fa-facebook"></i></a>
			<a href="#>><i class="fab fa-google"></i></a>
			<a href="#"><i class="fab fa-linkedin"></i></a>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placehoder="Password"" />
			<span>Forgot your password</span>
			<button>sign in</button>
		</form>
	</div>


	<div class="overlay-container">
		<div class="overlay">

			<div class="overlay-panel overlay-left">>
				<h1>Hello Friend</h1>
				<p>Enter your personal details and start journery with us</p>
				<button class="ghost" id="signUp">sign up</button>
			</div>
			<div class="overlay-panel overlay-left">
				<h1>Welcome back</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">sign in</button>
			</div>
		</div>
	</div>
</div>
```
First we write the structure in text format before marking up with html. we have two forms and two overlays.
We start by creating the sign up form. So the user of sign up form is a new user. so we need to provide information based around that. so we first tell the user to create account by using social media accounts or the email account. when the user providing the email we need to user name, email and password. Next we add a button to sign up the user.
Next we start by creating the sign in form. Now the user is exsisting user. so we start by tell the user to sign in using social media or your own email address. we tell the user to put the email and the password only. and we also add a link that if the user forgot the password.oNext we add a button to sign in.
Next we add the new users greeting information. we start by add the greeting message and followed by some paragraph of text. Next we give a button to sign up form.
Next we add the exsisting user greeting information. we start by adding the greeting message and followed by some paragraph of text. Next we give a button to sign in form.
Next we add necessary marking up for the text. such as headers for the greetings, inputs, buttons p tags and icons.
Next we group the social media icons inside a div and give a class name.
Next we group the input tags and h1 inside a form tag. we done this for the two forms. But to recongnize the different between those forms we also create a another two divs and put the forms inside those divs. and give class names to recognize one each other and other div forms.
Next we group the mesages inside two divs. we give a class name called overlay-panned for recongnize them from other divs. But also we give another class names for recognizing each other(overlay-left, overlay-right)
Next we group all the overlay containers inside a div. we give a class name called overlay-container to recognize over other divs.
Next we markup the tags that have links in a tag.
Next we group all the elements so far we created inside a div and we give a class name called container.
Finally we give id for some elements such as main container, some buttons to recongnize them form our script.

## INITIAL STYLE
Now let's go ahead and add some initial style to our stylesheet.
```CSS
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0
}

body {
	background-color: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}
```
First we import a font from google fonts. Next we select all the element our html page contains. And set up the box-sizing to border-box. This causes border, padding and margin vlaues are included to when setting width and height.Next we make the margin and the padding to zero of all our elements.
Next we select the body and change the background color to offwhite. Next we set up the body's display to flex. and we center the body items center by setting the align items to center and justify-content property to center.We also change the flex direction to column.
Next we use our font as roboto and fall back any sans-serif font.
Next we set the height to our body 100vh. Finally we set up a margin.

## HEADERS AND PARAGRAPHS
Now we need to deal with the headers and paragraphs.
```CSS
h1 {
	font-weight: bold;
}
p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px
	letter-spacing: 0.5px;
	margin: 20px 0 30px
}

```
First we select the headers and make them bold by setting up the font-weight property to bold.
Next we select the paragraphs and imporve the readability.

## SPANS AND ANCHOR TAGS
Now let's style the span and anchor elements.
```CSS
span {
	font-size: 12px;
}
a {
	text-decoration: none;
	color: #333;
	font-size: 14px;
	margin: 15px 0;


}
```
We give small font-size for the span element.and we give larger font-size for the links.
Next we make the links text-decoration to none. and also we give dark gray color to the link color. By doing this the icons are going to get that color.
Finally we set up a margin to top and bottom.

## BUTTONS
Next let's style the buttons:
```CSS
button {
	border-radius: 20px;
	border: 1px solid #ff4B2B;
	background-color: #ff4B2B;
	color: #fff;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
}

button:active {
	transform: scale(0.95);	
}

button:focus {
	outline: none;
	   }
button.ghost {
	background-color: transparent;
	border-color: #ffffff;
}
```
First we make a rounded border. And fill a oragish color to the border and background.
Next we fill a white color to text to imporve the contrast.
We make them little bigger by adding a font-size. and also we give some spacing in between them.
Next we add a less padding to left and right and more padding to top and bottom.
When the button is in active state we add a transform. and scale down that to 95%.
When the button in focus state we make the outline to none.
Next we select the buttons that have a class called ghost and make the background color to transparent and border-color to white.

## CONTAINER
Now let's make some changes to the container. we'll need to make that container background white and box shadow because to add some contrast between body and container. and also we'll want to make our container position relative to because we'll need to position the other items absolutely.
```CSS```
.container {
	background-color: #fff;
	postion: relative;
	box-shadow: 0 28px 48px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	width: 768px;
	min-height: 480px;
	max-width: 100%;
}
First we select the container by using the class selector. Next we change the background color to white. We doing this because we want add contranst between container and the body.
Next we add a box-shadow. box-shadow property allows you to add a drop shadow around a box. In this shadow we are not giving a horizontal offset property. But we position  a vertical offset of the shadow to bottom.(Negative values position the shadow to the top of the box) Next we give a blur to avoid the shadow look like solid line. Next we specify a color using rgba. We also add a another box shadow to our container.
Next we specify a width to our container. And we limit the heigth to 480px and we tell that our contaiiner can taken full width.


## FORM AND INPUTS
Now we should deal with the form and inputs:
```CSS
form {
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}
input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}
```
First we start by selecting the form. we set the background-color property to white.
Next we center the contents using flexbox.
Next we add a padding to left and right side of the form.
Next we select the input and make the color to light gray. next we set the border to none.
Next we add a padding and margin. Finally we set up the width to 100%;

## MAKING THE ICONS ROUND
Now we need to make our social media icons round-shape.
```CSS
.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #ddd;
	border-radius: 50%;
	margin: 0 20px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	margin: 0 5px;
}
```
First we select the social container element and set a margin top and bottom 20px.
Next we select the links inside the social container. Next we set a border. And we make the border radius to 50% to make the border round.
Next set the links display to inline-flex. By doing that we make sure those elements remain in the same flow but we can give flex-properties.
So we center the child elements using justify-content property and align-items property.
Finally we specify a width and height for the links.


## FORM-CONTAINER
Lets begin with the layout. we'll need to make our forms appear in the left and right of the  form container. To do that we need to mess around with form-container.
```CSS
.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transtion: all 0.6s ease-in-out;
}
```
We start with selecting the from container that grouping our two forms.(left and right),then we move on to position absolute. By doing that we taken our the form container from the normal flow.
Next we position top corner of our container by setting the top offset property to 0.
Next we specify a height for the container using precentage. 100% means container get the full width of the parent container.
Finally we specify a transition to all the proprities.and it takes 0.6s(under 1s is quite good) and ease-in-out(slow start and slow end)


## POSITIONING THE SIGNIN/UP FORMS
We'll need to position our two forms in top left corner of our form-container.
```CSS
.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.sign-up-container {
	left: 0;
	width: 50%;
	z-index: 1;
	opacity: 0;
}
```
We first start with selecting the sign up container, then me change the leftoff set property to 0. This causes the container to position top left corner of the parent container.We also set up the z-index property to 2 because we want this container on top of every other elements.
Next we select the sign-up-container and position that top-lfet corner by setting up the left offset propery to zero.Next we change the width to 50% of the container. Finally we add the z-index to one.



## OVERLAY CONTAINER
Let's move on to position the overlay container.
```CSS
.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}
.overlay {
	background: #ff416c;
	background: linear-gradient(to right, #ff4b2b, #ff416c) no-repeat 0 0 /cover;
	color: #fff;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transform: translateX(0);
	transition: transform 0.6 ease-in-out;
}
```
We start by selecting the overlay container and we make that container position absolute. So we position that top and 50% off set to left side. we make the width to 50% and height to 100% that indicating to change half size of the container. Next we make the overflow to hidden to hide the extra content.
Next we set up a transition that apply for the transform property, that take 0.6s to complete and have a slow start and slow end(ease-in-out).
Next we make the z-index to 100 to indicate this is to top most item of our entire webpage.
Next we select the overlay, then add a background color. we also add a another background. we use linear-gradient background for that. Gradient  start from left and goes for the right side, start color is #ff4b2b and ended with #ff416c. 
Next we give a color of white for the test inside the overlay.
Next we position the overlay relative. Next we offset that overlay to left side -100%; and make the width to 200%;Finally we change the height to 100%;
Next we set up a transfrom property to the overlay. By setting this property we can manupulate the overlay's position and dimensions with different ways(scale, skew, transform) In this case we are translatiingX axis. We are not setting up value in the css, we use JavaScript to done that for us.
We also set a transition propery to that whatever visual changes happen to the overlay'h's transform property  should go throught this transition. It takes 0.6s and start with slow and ending with slow.


##	working with the overlay pannel
Now We want to make our pannels styles.
```CSS
.overlay-pannel {{
	position: absolute;	
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 50%;
	padding: 0 40px;
	height: 100%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;

}
```
First we position the ovarlay pannel(contains two overlays) absolutely. Then set the top offset property to 0. 
Then we make the contents inside the pannels center vertically. we use flexbox for that. we alsocenter the text also.
Each pannel should take 50% of the width container so we set the width propery to 50%;
and we change the height property to 100%.
Next we give padding to top and bottom only. We finish with by adding a transform property. By adding transform propery we can manupulate the position and dimensions of the pannels. In this case we just want to move horizontally only. so we set the translateX to zero. 


## OVERLAY LEFT PANNEL AND OVERLAY RIGHT PANNEL
Now we want to position the left and right pannels left and right side of the overlay pannel.
```CSS
.overlay-left {
	left: 0;
	transform: translateX(-20%));
}

.overlay-right{
	right: 0;
	transform: translateX(0);
}
```
First we select the the overlay left and position that left side of the container. we also add a transform propery and we translate that to negative -20% so that the transition for the overly left start from 20 off the screen.
Next we select the overlay right and positon that right  side of the container.We also add a tranform property so that we can manupulate the left container.

## ADDING AND REMOVING NEW CLASS USING JAVASCRIPT
Now we need to tell JavaScript to add a new class to the container. We can style that class later.
```JavaScript
	const elSignIn = document.getElementById('signIn');
	const elSignUp = document.getElementById('signUp');
	const elContainer = document.getElementById('container');

	elSignUp.addEventListener('click', () => {
		elContainer.classList.add('right-pannel-active');
	});
	elSignIn.addEventListener('click', () => {
		elContaienr.classList.remove('right-pannel-active');
	});
```
First we get the three main elements what we want(signIn, signUp, container).
Next we tell JavaScript to add a event listener to the signup button. Once the event triggers then go ahead and add a new class called *right-pannel-active* to the main container.
Next we add a event listener to the signIn button also. We tell JavaScript to remove the *right-pannel-active* class once click event happns to the signin button.

## MOVING THE SIGN IN TO THE LEFT AND LEFT OVERLAY TO THE RIGHT
Now let's add animation to our css.
```CSS
.container.right-pannel-active .sign-in-container {
	transform: translateX(100%);
}
.container.right-pannel-active .overlay-container {
	transform: translateX(-100%);

}
```
First we select the container that have a class called 'right-pannel-active', next we target the sign-in-container in that state, next we add a transform propery to translate to right 100%;
This transformaion is controled by transitions.
Next we select the container that have a class cladded right-pannel-active and target the overlay-container, so when we have a right-pannel-active class we tell browser to move the overlay container to left 100%;

## BRING THE SIGNUP CONTAINER
We know that signup and sign in containers are on top of each other. First we move the signIn container, now we want to move the signUp container also.
```CSS
.container.right-pannel-active sign-up-container {
	transform: translateX(100%);
}
```
We select the sign-up container when we have a class called right-pannel-active on the container. Next we transform that right side.

## GETTING THE OVERLAY RIGHT
Now we need to show the right overlay icon to the user.
```CSS
.container.right-pannel-active .overlay {
	transform: translateX(50%);
}
.container.right-pannel-active .overlay-left {
	transform: translateX(0);
}
```
We select the overlay that contains two overlays(overlay-left and overlay-right) and transform that in to 50% to the right side.
Next we make sure our text are position centered by addting the transofrm propery to the overlay left and tranlatiting to 0 in x axis.

## ADDING THE MOVEMENT EFFECT TO THE RIGHT OVERLAY PANNEL
Now we'll need to make sure that our greetings text also moving.
```CSS
.container.right-pannel-active .overlay-right {
	transform: translateX(20%);
}
```
We select the overlay right and add a transform property.












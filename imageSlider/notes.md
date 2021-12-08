# Responsive Image Slider
Today, We'll going to build a responsive image slider. 

## GETTING STARTING
We'll need to create a folder called imageSlider. we use this folder to store files and images for our project.
Next we want to add index.html, styles.css and script.js files. 
Finally we want to create another directory called images and download some images.
```Bash
mkdir imageSlider
cd imageSlider
touch index.html styles.css script.js
mkdir images
```
You can download images from [[pexels]](https://www.pexels.com/).


## Initial HTML setup
Before getting start first thing we want to do is that we want to setup the initial HTML setup. Let's go and do that:
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Responsive Image Slider</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>
        <!-- Content goes here -->
        <script src="script.js"></script>
    </body>
</html>
```
First we set up the doctype to tell the browser that we are writing HTML document.
In the head section we add two meta tags. using charset="UTF-8" we tell the browser to use UTF-8 for charactor encoding.(coverting your characters to machine readable code)
Viewport is the size of the visiable area on the screen. Using viewport on meta element we tell browser that how to scale the content inside the viewport in different devices. Desktops, mobile phones and tablets have different viewports and the viewport tag is going to display the content correctly on those different divices.
Next we give a title for our webpage called Responsive Image Slider.
Next we add a link to our styles.css file using link attribute.
Next we add a link to the font-awesome library. we using this library to get icons for our project.
Finally we add the body tag and inside the body tag we add our script tag. we use src attribute to divide our scripts to another file.

## DEFINING THE STRUCTURE OF THE PAGE
Now we'll need to add necessary components to our application. They are divs for grouping, h1 for headeing, p, buttons and text. 

```HTML
<div class="slider">
    <div class="slide current">
        <div class="content">
            <h1>Slide One</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper accumsan faucibus. Aliquam consequat vulputate eros, in pellentesque justo pellentesque id. Curabitur et volutpat nibh. Nulla pulvinar turpis ac diam consectetur iaculis. Quisque vel maximus sem. 
            </p>
        </div>
    </div>
    <div class="slide">
        <div class="content">
            <h1>Slide One</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper accumsan faucibus. Aliquam consequat vulputate eros, in pellentesque justo pellentesque id. Curabitur et volutpat nibh. Nulla pulvinar turpis ac diam consectetur iaculis. Quisque vel maximus sem. 
            </p>
        </div>
    </div>
    <div class="slide">
        <div class="content">
            <h1>Slide One</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper accumsan faucibus. Aliquam consequat vulputate eros, in pellentesque justo pellentesque id. Curabitur et volutpat nibh. Nulla pulvinar turpis ac diam consectetur iaculis. Quisque vel maximus sem. 
            </p>
        </div>
    </div>
    <div class="slide">
        <div class="content">
            <h1>Slide One</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper accumsan faucibus. Aliquam consequat vulputate eros, in pellentesque justo pellentesque id. Curabitur et volutpat nibh. Nulla pulvinar turpis ac diam consectetur iaculis. Quisque vel maximus sem. 
            </p>
        </div>
    </div>
    <div class="slide">
        <div class="content">
            <h1>Slide One</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper accumsan faucibus. Aliquam consequat vulputate eros, in pellentesque justo pellentesque id. Curabitur et volutpat nibh. Nulla pulvinar turpis ac diam consectetur iaculis. Quisque vel maximus sem. 
            </p>
        </div>
    </div>
</div>
<div class="buttons">
    <button id="prev"><i class="fas fa-arrow-left"></i></button>
    <button id="next"><i class="fas fa-arrow-right"></i></button>
</div>
```
We create a header. and we add dummy text inside p elements. and then group those two elements inside div element that have a class called content.
Next we group that element(content) inside another div element that have a class called slider. After that we copy each that div element(slide) five times. Next we add new class called current to the first div element(slide).
Finally we group all those div elements(slide) inside another div element that have a class called(slider)
Now we have a slider. Inside the slider we have five slides. Each of the slides we have content. Each of content we have heading and a paragraph.
Finally we use icon tag to add arrow-left icon and arrow-right icont. we specify the classes for that. Then we markup each of icons using buttons element that have an unique ids. And finally we group those buttons inside a div that have a class called buttons.

## ADDING INITIAL STYLE
To get start with styling first we need to get a [[font]](fonts.google.com). Then we need to set up the sizing of the elements and also some other changes like background-color and color.
```CSS
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    background: #333;
    color: #fff;
    line-height: 1.6;
}
```
First we get a font from the google fonts. Next we select all the elements and set up the box-sizing property value to border-box. Now padding and margin also include when we setting width and height for the elements. Next we set up all the elements margin and padding to zero.
Now we know all the elements doesn't have margin and padding. Body background is dark grey, text color is white.

## STYLING THE SLIDER
Now we'll need to style the next big element. It is the element that wrap around the slides called slider.
```CSS
.slider {
    position: relative;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}
```
If we want to position the slides absolutely we need to make our slider to positioned relative. We set up the overflow to hidden because we don't want to spill out the content out from the slider. Next we set up the height and width to 100vh and 100vw. By doing this slider is going to get the entire width and height of our viewport.

## STYLING INDIVIDUAL SLIDES & THINKING AHEAD FUNCTIONALITY
Each slides need to take full width and height of the container. That's the styling we want to do first. 
```CSS
.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
}
.slide.current {
    opacity: 1;
}
```
We set the position to absolute because we want to take each slide full width and height of the container. Then we position the slide top left corner of the slider. and next we span the slides width to 100% of the container and we span the slides height to 100% of the slider height.
Next we set the every slides opacity to 0. It causes to invisiable the all the slide elements. But we set up the slide that have a class called current to opacity to 1. Because we want to show only one slide at a time.

## ADDING BACKGROUND IMAGES
In our html we have p and h1 wrap around the text. those p and h1 is wrap around a div called content. Each content wrap around with a element called slide. Previously we make that slide to take the full height and width of the containing element. Now the question is where we should add the background image? we'll adding the background image inside  the content(Div that wrap around paragraph and heading).
We have five images. to add those five images we need to select each individual content element. But we haven't set up individual classes for those content divs.
We can use :nth() css selector for selecting individual items that doesn't have unique id or class. we can think each content items are childs of slide. so if we select all the slides we have 5 slides. If we want to select the first slide's first content of the slide we can use .slide:first-child, to select the second child of the second content we can use .slide(2) and so on.
```CSS
.slide:first-child {
  background: url('https://source.unsplash.com/RyRpq9SUwAU/1600x900') no-repeat
    center top/cover;
}
.slide:nth-child(2)  {
  background: url('https://source.unsplash.com/ggZuL3BTSJU/1600x900') no-repeat
    center center/cover;
}
.slide:nth-child(3) {
  background: url('https://source.unsplash.com/TMOeGZw9NY4/1600x900') no-repeat
    center top/cover;
}
.slide:nth-child(4) {
  background: url('https://source.unsplash.com/yXpA_eCbtzI/1600x900') no-repeat
    center top/cover;
}
.slide:nth-child(5) {
  background: url('https://source.unsplash.com/ULmaQh9Gvbg/1600x900') no-repeat
    center top/cover;
} 

```
First we select the content of the first container that have a class called slide. then add a background.
Next we select the content of the second container that have a class called slide. then add a background.
Next we select the content of the third slide and add a background.
Next we select the content of the fourth slide and add a backgroud.
Finally we select the content element of the fifth slide and add a background.
Previously we set the the opacity to 1 If there is only have a class called current. we know that the first slide have that class. every other slide content are invisiable because we set the opacity value to zero. If we want to display the second slide we only need to add the new class called current to the second slide. same goes for every one of them.

## STYLING THE CONTENT
In content we have heading and paragraphs. Each content divs are wrap around with a the slide. each slide wrap around with slider. we make slider to relative. so we can position content absolutely inside the slide div.
```CSS
.slide .content {
    position: absolute;
    bottom: 70px;
    left: 0px;
    width: 600px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 35px;
    color: #333;
}
.slide .content h1 {
    margin-bottom: 10px;
}
```
We set the position of the content div to be absolutely with in the slide container. And we positioned that bottom left corner. we specify a width, background color and padding to the content div. we set the font color to dark gray of the text insie the content div.
Finally select the h1 element inside the content div and set up the margin-bottom property to 10px.
One thing we want to do is that initialy we want to hide the content and slide from the left side to the screen. we can hide the element by setting the left off set a negative value.

## ANIMATING THE CONTENT DIV
Animation needs to be happen once the current class is selected. content div needs to be slide from the left side corner to the screen.
```CSS
.slide .content {
    /* code */
    left: -600px;
    opacity: 0;
}
.slide.current .content {
    opacity: 1;
    transform: translateX(600px);
    transition: all 0.7s ease-in-out 0.3s;
}
```
First we select the content div inside the slide div. After that we set up the left off set value to -600px. This causes to move to the left side of the screen. and change the opacity to 0.
Next we select the current slide's content and change the opacity to 1.
Next we set up a transfrom. Tranformation is translate to x axis 600px. 
Next we set up a transition to all the elements inside the content. time to be 0.7s and it needs to be ease-in-out and have a slight delay of 0.3s.

## POSITININING THE BUTTONS
We'll need to position the left button on left side horizontally and center vertically. And the right button on right side horizontally and center vertically. We can make the button position absolutely because we make the slider container to be positiend relatively.
```CSS
.buttons button#prev {
    position: absolute;
    top: 40%;
    left: 15px;
}
.buttons button#next {
    position: absolute;
    top: 40%;
    right: 15px;
}
```
We select the button that have a id called #prev. so we positiond the previous button middle in left corner of the screen by setting the top property value to 50% and left property value to 15px. and we done same thing to the next button. we only change the left offeset property to right offset.

## STYLING THE BUTTONS
Let's do the styling:
```CSS
.buttons button {
    border-radius: 50%;
    outline: none;
    border: 2px solid #fff;
    padding: 13px 15px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
}
.buttons button:hover {
    background-color: #fff;
    color: #333;
}
```
First we select the two buttons inside the buttons div. Next we make the button round by setting the border-radius to 50%. Next we get rid of the square outline by setting the outline propery to none.
Next we set up our own border by setting border property to 2px solid #fff. Next we make our button bigger by setting padding property values. Next we change the background color to transparent by setting the background-color property to transparent. And we set the color to #fff.
We want to change to the mouse pointer when hover over the button. so we set the cursor to pointer.
Next we select the buttons on hover state by using pesudo selectors and change the background color to white and text color to dark grey.

## GETTING START WITH ADDING JAVASCRIPT
Now we need to get start with getting the elements we want from the document.
```JavaScript

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
```
    We get all the slides from the document and next we get the next and prev button.

## AUTOMATIC SLIDING FUNCTIONALITY
We'll need to add automatic sliding of our images. For now let's do the initial setup.
```JavaScript
const auto = false;
const intervalTime = 5000;
let slideInterval;
```
    First we set up a variable call auto and assign a boolean value false. By doing this we indicating default method is not set to automatic sliding.
    Next we set up a another variable call intervalTime and assign 5000. we are using this value to set a interval time for each slide. Slide is only going to show up for 5 seconds and then move on to next one.
    Next we create a variable call slideInterval.

## CREATING THE NEXT SLIDE FUNCTIONALITY 
The idea we are going to use is that we know each slide element have siblings. and we know that if we add current class for any of the sibling and remove the current class from previous element, style going to change and show us the slide. What we can do here is that first we tell javaScript to get the element that have a class called current. Then we tell javaScript to remove that class. And next we tell javaScript to add a new class called current to next sibling.(if there are siblings avaliable)If there are no any siblings avaliable then we tell javaScript to add current class to the first sibling. 
we are going to bundle up all these instrucions inside a function. Because we want to reuse these instructions many times.
```JavaScript
const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'), 200);
}
```
    First we define a function called nextSlide. This function contains the instructions that we want to reuse anytime we click the next button.
    Inside the function first we tell javaScript to get the element that have a class called current. we use querySelector() method on the document and we save that element inside a variable called current. Because we want to reuse that element inside our function.
    Next we change in to the classList property of the currentElement and we call the remove method. remove method takes the class name we want to delete. so we provide the class name as current.
    Next we tell javaScript to check for next siblings of our current element. we use if statement for that. inside the parenthesis we specify the condition. current.nextElementSibling is the property we are checking.
    If it gives truthy value then we tell javaScript to set up a new class called current for that element. we change in to the nextSibling and to the classList and we call add method. add method takes string as a argument. so we provide the class name.
    After sometime we tell javaScript to remove that class from that element. we using setTimeout function for that. this function takes two argument first one is a function. and the second argument is the amount of time. we give an anonymos function that have a one instruction called remove the class from the current element. 
    
## ADDING THE PREV SLIDE FUNCTIONALITY
Now we'll need to tell javaScript to add the previous changing functionality. so first we want to tell javaScript to get the element that have a class called current. Then we want to tell javaScript to remove that class from that element. And next we need to tell javaScript to if that element have a previous sibling then add a current class to that element. else current element doesn't have any privious sibling then add a class to the final element from all the slide elements.
```JavaScript
const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => {
        current.classList.remove('current');
    }, 200);
}
```
    First we create a function for bundle up our instructions. next we use querySelector for finding the element that have a class called current.
    Next we remove that class. and next we check if there are any previous sibling this element have, if it is then we add the current class to that element. if not we add the current class to the last elemets. finally we set up a time out for before removing the class called current.

## CONNTECTING THE NEXTSLIDE AND PREVSLIDE FUNCTIONS TO THE SYSTEM
Now what we'll going to tell javaScript to run the prevSlide and nextSlide functions every time we click approriate buttons.
```JavaScript
prev.addEventListener('click', (e) => {
    prevSlide();
});
next.addEventListener('click', (e) => {
    nextSlide();
});
```
    prev is the button. so we add a event listener to that button using addEventLlistener method. that method takes two arguments. first argument is a string and second argument is a function. so we give click as the first argument. and for the second argument we give a anonoymous function with the event details containing object.
    We basically tell javaScript to how to do simple things like add a new class called current to another class.

## MAKING OUR APPLICATION RESPONSIVE
If we make our application small it it going to get pretty ugly with the content section. what we need to do is that tell css to instead of positioning that element left go and position that form the bottom. and also we need to tell CSS to change the tranformation coming from bottom rather than left.
```CSS
@media (max-width: 500px) {
    .slide .content {
        bottom: -300px;
        left:0;
        width: 100%;
    }
    .slide.current .content {
        transform: translateY(-300px);
    }
}
```
    First we define a media query that if the screen width is gets 500px or smaller then do the following changes.
    We select the content divs inside the each of the slide divs and set up the bottom off set property to -300px. By doing that content div is going to dissper to the bottom of the screen. and we set up the left off set property to 0. By doing that out content are nicely placed under the screen right below the bottom eage.
    Next we set up the width to 100%. Because we want take the full width of the container when in smaller screens.
    Finally we select the content div that have a class called current. we set up the tranform property to translateY to -300px. by doing that our content div is going to slide to the up -300px.

## AUTOMATICALLY CHANING SLIDE
Now we can add automatic slide changing. We can tell javaScript to call the nextSlide function every 5seconds.
```JavaScript
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
```
    If the auto is true we set a interval timer for the nextSlide function.

## CLEARING THE INTERVAL
Now we need to reset the timer
```JavaScript
next.addEventListener('click', e => {
    // code
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    } 
});
prev.addEventListener('click', e => {
    // code
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(prevSlide, intervalTime);
    }
});
```
    If the auto is true we clear the interval. and set a new interval.

## PUTTING ALL TOGETHER
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Image Slider</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="slider">
        <div class="slide current">
            <div class="content">
                <h1>Slide One</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper accumsan faucibus.
                    Aliquam consequat vulputate eros, in pellentesque justo pellentesque id. Curabitur et volutpat nibh.
                    Nulla pulvinar turpis ac diam consectetur iaculis. Quisque vel maximus sem.
                </p>
            </div>
        </div>
        <div class="slide">
            <div class="content">
                <h1>Slide One</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper accumsan faucibus.
                    Aliquam consequat vulputate eros, in pellentesque justo pellentesque id. Curabitur et volutpat nibh.
                    Nulla pulvinar turpis ac diam consectetur iaculis. Quisque vel maximus sem.
                </p>
            </div>
        </div>
        <div class="slide">
            <div class="content">
                <h1>Slide One</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper accumsan faucibus.
                    Aliquam consequat vulputate eros, in pellentesque justo pellentesque id. Curabitur et volutpat nibh.
                    Nulla pulvinar turpis ac diam consectetur iaculis. Quisque vel maximus sem.
                </p>
            </div>
        </div>
        <div class="slide">
            <div class="content">
                <h1>Slide One</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper accumsan faucibus.
                    Aliquam consequat vulputate eros, in pellentesque justo pellentesque id. Curabitur et volutpat nibh.
                    Nulla pulvinar turpis ac diam consectetur iaculis. Quisque vel maximus sem.
                </p>
            </div>
        </div>
        <div class="slide">
            <div class="content">
                <h1>Slide One</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper accumsan faucibus.
                    Aliquam consequat vulputate eros, in pellentesque justo pellentesque id. Curabitur et volutpat nibh.
                    Nulla pulvinar turpis ac diam consectetur iaculis. Quisque vel maximus sem.
                </p>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button id="prev"><i class="fas fa-arrow-left"></i></button>
        <button id="next"><i class="fas fa-arrow-right"></i></button>
    </div>
    <script src="script.js"></script>
</body>

</html>
```
```CSS
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    background: #333;
    color: #fff;
    line-height: 1.6;
}
.slider {
    position: relative;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}
.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
}
.slide.current {
    opacity: 1;
}

.slide .content {
    position: absolute;
    bottom: 70px;
    left: -600px;
    opacity: 0;
    width: 600px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 35px;
    color: #333;
}
.slide .content h1 {
    margin-bottom: 10px;
}
.slide.current .content {
    opacity: 1;
    transform: translateX(600px);
    transition: all 0.7s ease-in-out 0.3s;
}

@media (max-width: 600px) {
    .slide .content {
        bottom: -300px;
        left: 0;
        width: 100%;
    }
    .slide.current .content {
        transform: translateY(-300px);
    }
}

.buttons button#prev {
    position: absolute;
    top: 40%;
    left: 15px;
}
.buttons button#next {
    position: absolute;
    top: 40%;
    right: 15px;
}

.buttons button {
    border-radius: 50%;
    outline: none;
    border: 2px solid #fff;
    padding: 13px 15px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
}
.buttons button:hover {
    background-color: #fff;
    color: #333;
}

.slide:first-child {
  background: url('https://source.unsplash.com/RyRpq9SUwAU/1600x900') no-repeat
    center top/cover;
}
.slide:nth-child(2)  {
  background: url('https://source.unsplash.com/ggZuL3BTSJU/1600x900') no-repeat
    center center/cover;
}
.slide:nth-child(3) {
  background: url('https://source.unsplash.com/TMOeGZw9NY4/1600x900') no-repeat
    center top/cover;
}
.slide:nth-child(4) {
  background: url('https://source.unsplash.com/yXpA_eCbtzI/1600x900') no-repeat
    center top/cover;
}
.slide:nth-child(5) {
  background: url('https://source.unsplash.com/ULmaQh9Gvbg/1600x900') no-repeat
    center top/cover;
} 
```
```JavaScript
const slides = document.querySelectorAll('.slide');
console.log(slides);
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const currentEl = document.querySelector('.current');
    currentEl.classList.remove('current');
    if (currentEl.nextElementSibling) {
        currentEl.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => {
        currentEl.classList.remove('current');
    }, 200);
}

const prevSlide = () => {
    const currentEl = document.querySelector('.current');
    currentEl.classList.remove('current');
    if (currentEl.previousElementSibling) {
        currentEl.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => {
        currentEl.classList.remove('current');
    }, 200);
}

prev.addEventListener('click', (e) => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(prevSlide, intervalTime);
    }
});

next.addEventListener('click', (e) => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
```

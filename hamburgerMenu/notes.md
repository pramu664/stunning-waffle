# LANDING PAGE WITH HTML AND CSS3
Let's build a webpage using HTML5 and CSS3. This web page contains hamburger menu, showcase section and about section. we are using css custom properties,, differen types of css selectors and also we are creating overlays and many more. Inspirations comes from traversy media youtube channel.
So my intentions are to try to learn as much as possiblie by cloning this project. And also I like to create small product using these ideas. so the product contain video, note and code. I am sharing this small product for free using Github, youtube and other social media platforms. I don't have any intentions to copy other people's work. This is a truly learning project.
I am also adding my own ideas to this project to make this authentic as possible for me.

## GETTING IMAGES
We can download any image we like for free from [pexels.com].(https://www.pexels.com/). Then we should put that image inside our folder.

## SETTING UP THE HTML PAGE
We need to first get start with setting up the HTML page for our project.
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hamburger Menu</title>
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="menu.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    </head>
    <body>

    </body>
</html>
```
The `<!DOCTYPE html>` tag is just a declaration. It simply says "This is an HTML document". Then inside the html tag we add a attribute lang to declare that we are using English as our language to write this HTML page. Next we define the head of our HTML page.
First we add two meta tags. In charset we said browser to use UTF-8 for when translating the charaters into machine readable charaters. Next meta tag we said to browser to we are deling with the viewport by adding a name attribute. 
Then we said browser that content inside our page should get the viewport width of any device such as mobile phones, desktops and tablets.
Next we give a title Hamburger Menu. Next we give a link to our stylesheet using link attribute. We also give link to another CSS file menu.css.

### GETTING A FONT
Now we need to get a nice font for our application. To get a font we can navigate into the [Google fonts](https://fonts.googel.com) and get the *Roboto* font. we need to search the font *Roboto* and click the font and there is a menu pop up side to the screen. we need to copy the link tags and paste inside the head section of our page.
Now the html page should look like this.
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hamburger Menu</title>
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="menu.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    </head>
    <body>

    </body>
</html>
```
## CREATING THE APPLICATION STRUCTURE
Now Finally we can work with our project. We need to create a basic struture for our project. Our goal is to create a webpage that has a hamburger menu for the navigation. So we know navagation menu have links to other pages like home, about, contact and etc. So we need to add links. To make our webpage we also need to consider addding some header paragraph and button. Let's go ahead and do that:
```HTML
<div class="menu-wrap">
    <input type="checkbox" class="toggler">
    <div class="hamburger"><div></div></div>
    <div class="menu">
        <div>
            <div>
                <ul>
                    <li><a href="#">Home</a>
                    <li><a href="#">About</a>
                    <li><a href="#">Services</a>
                    <li><a href="#">Contact</a>
                </ul>
            </div>
        </div>
    </div>
</div>

<header>
    <div class="container showcase-inner">
        <h1>Welcome</h1>
        <a href="#" class="btn">Read more</a>
    </div>
</header>
<section id="about">
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas, enim in eleifend aliquam, dui quam lobortis risus, sit amet ultrices leo elit id felis. Aliquam ultrices lacinia cursus. Nam scelerisque id sem sed fermentum. Pellentesque pretium efficitur enim, in porttitor ante ornare id. Sed sed 
    </p>
    <h2>Social Media</h2>	
        <div class="social">
	    <a href="#"><i class="fab fa-twitter fa-3x></i></a>
	    <a href="#"><i class="fab fa-youtube fa-3x></i></a>
	    <a href="#"><i class="fab fa-linkedin fa-3x></i></a>
            <a href="#"><i class="fab fa-facebook fa-3x></i></a>
        </div>
</section>
```
At the core level we have few links, heading, paragraph. we use div to group the navigation links in a way that we can make a hamburger menu using css.
We start by creating the four anchor tags and we group each of the anchor tags using list tags. Then we group those li items inside the ul tag. 
Then we use two div tags to group the ul tag. And we group those two div tags inside another div tag. In this case we give a class name for that div clalled *menu*.
Then we create a div and put another div element inside that div. we give a class name for the first div element called *hamburger*. Because ultimately this is going to become hamburger icon on our webpage.
Next we create input tag. we define that input tag's type as checkbox. we using this input tag to toggle the hamburger menu so we give a class name called *toggler*.
Next we group all the elements inside another div. We give a class name called *menu-wrap*. Because that div wrap around all the elements.
Next we add a h1 and a link that ultimately going to become a btn so we give that anchor tag a class name called *btn*. Next we group those two elements inside a div and we give this div class name called *container*.
Next we group the container inside a header element and give that header element a class name called showcase. 
Next we are creating about section. so the about section contains a paragraph, headings, and links to social media accounts.
We also give another class to the container called *showcase-inner*.
Now we can start the index.html file inside the browser with the developer console.

## INITIAL STYLING
Now we'll need to get start with styling by creating custom variables, get rid of the default styling, adding a font and so on.
```CSS
:root {
    --primary-color: rgba(0, 0, 0, 0.75);
    --overlay-color: rgba(24, 39, 51, 0.85);
    --menu-speed: 0.75s;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font: 'Roboto', sans-serif;
    line-height: 1.4;
}
```
First we set up the primary color and the overlay-color for our application.Next we set up the menu speed to 0.75s. we use `:root` for selecting the top most element in the DOM(html element).
Next we select all the elements by using unversal selector. then we set up the margin to be 0 and padding to be 0 to get rid of the default margin and padding. and also we set up the box-sizing to border-box. So now our elements are sizing including the padding and the border.
Next we set up the font-family to use 'Roboto' or if Roboto not avaliable use any sans-serif font. And also we set up the line-height to 1.4.


## STYLING THE CONTAINER
We have three sections to styles. Hamburger menu section, showcase section and about section. First style the showcase section.
```CSS
.container {
    max-width: 960px;
    margin: auto;
    overflow: hidden;
    padding: 0 3rem;
}
```
First we select the div that contains the h1, p and a tag. then we change the max-width property to 960px. By setting the margin auto in every direction we can center our container inside the body. Then we make sure if overflow happens to this box make sure to hide the overflow. Finally we give padding to left and right. so now the text are not hang around with the border of the containing box.

## CREATING THE BACKGROUND
We'll need a background for the web page. we'll going to use image as our background image and cover that image with overlay.
```CSS
.showcase {
    background: var(--primary-color);
    position: relative;
    height: 100vh;
    width: 100vh;
    color: #fff;
}
.showcase:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: url('image.jpg') no-repeat center center/cover;
    z-index: -1;
}
```
First we give a solid color background by using the custom variable that we defined ealiar in our code. we use this solid background as a overlay to our webpage. we then change the position property to relative. Next we change the height and the width of our showcase area to use 100vh.(100% of viewport). Finally we change the text color to white.
Next we select the before element to the showcase element and set the content to empty string. Then we set the position property to absolute. By doing this we can position this element easily by using offset properties. Next we position this element top left corner of the showcase box. Next we give width and height to 100% to taken up the full showcase container.
Next we add a background to the element with none repeted centerd and full coverd background. Finally we set up the z-index property to negative value. by doing this this container is going to push down to bottom of the container list.

## CENTERING THINGS INSDIE THE SHOWCASE SECTION
Now we want to center our header, p and link. we use differnt class name for selecting those items parent element. let's go ahead and do that:
```CSS
.showcase .showcase-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}
```
First we use new class name called showcase-inner to select the element. The reason we are doing this to organize the centering of the child elements in different place in our code. so now we only have just a one task to wrap our head around. That is centering the child elements. Fist we display the parent container to flex. By doing this defautl flexbox properties are going to apply to the child elements. so child elements are going to taken our from the normal flow  and act like horizontal flow. 
Next we change the flex-direction property to column. By doing this the child elements are going to flows down from top to bottom. Next we give our parent container to use full height of the container by setting up the width to 100%.
Next we change the vertical alignment to center by settng up the justify-content property to center. Next we change the vertical alignment of our child elements to center by setting up the align-items property to center.
Finally we setup the text alignment to center and this causes to center the text inside the p element.

## STYLING THE ITEMS INSIDE THE SHOWCASE SECTION
Let's style the header and the paragrah:
```CSS
.showcase h1 {
    font-size: 4rem;
}
.showcase p {
    font-size: 1.3rem;
}

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
    border: none;
    background-color: var(--primary-color);
    color: #fff;
    opacity: 0.7;
}
.btn:hover {
    opacity: 1;
}
```
We set up the h1 element font size to 4rem. 1 rem equals to 16px. next we set up the font-size property to 1.3rem in our paragraph element.
We select element using the .btn class attribute. and change the display property to inline-block. So we can add the block level features to the button such as setting up dimentions, add a background and so on.
Next we add the padding and margin. and we make the border to none and background-color we set the primary color. next we change the text color to white.
Next we set up opacity to 0.7. Next when we are in the hover state of the button we change the opacity to 1.

## STYLING THE BUTTON
Now we need to turn the link into a button.
```CSS
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
    border: none;
    background-color: var(--primary-color);
    color: #fff;
    opacity: 0.7;
}
.btn:hover {
    opacity: 1;
}
```
First we select element using the .btn class attribute. and change the display property to inline-block. So we can use box-sizing properties to the element.
Next we add the padding and margin. and we make the border to none and background-color we set the primary color. next we change the text color to white.
Next we set up opacity to 0.7. Next when we are in the hover state of the button we change the opacity to 1.

## STYLING THE ABOUT SECTIONS

We'll going to style the final section of our web page. we are going to do some simple styling markup to those contents. Such as just making things center. and limiting the width of the content. and adding basic typography styles.
```CSS
#about {
	padding: 40px;
	text-align: center;
}

#about p {
	font-size: 1.2rem;
	max-width: 600px;
	margin: auto;
}

#about h2 {
	margin: 30px 0;
	color: var(--primary-color);
}

.social a {
	margin: 0 5px;
}
```
   we select the about section and make all the elements text to be appear in center. then we set up the paragraphs font size, max-width. we set the marginto be auto for top-bottom and left-right. finally we style the h2 and anchor tags. Just giving some margin and color.

## STYLING THE MENU-WRAPPER
Let's go and style the menu-wrapper.
```CSS
.menu-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}
```
First we select the the container that contains all the hamburger menu items. Next we set up the postion to fixed. By doing that the entire container is going taken out from the normal flow and postion top left corner of the root element. 
To make sure the postion we also set up the offset properties top to zero and left to zero. And finally we set up the z-index to 1. By doing that we get the entire menu on top of all the element.

## MOVE IN TO THE TOGGLER
Now let's do some styling to the checkbox:
```CSS
.menu-wrap .toggler {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
}
```
Now we select the checkbox using CSS. And we set the position property to absolute. And we set up the top and left offset properties to 0 to position the checkbox top left corner of the menu. And next we change the z-index to 2 to get the toggler top on our every element. Next we change the cursor to pointer. and we give 50px width and height. Finally we set the opacity to 0 to hide the checkbox.

## MOVE IN TO THE HAMBURGER
Now we need to style the box that containing the hamburger lines.
```CSS
.menu-wrap .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
}
```
First we select the hamburger container. Next we position the element top left corner of the menu by setting the postion property value to absolute and setting the top and left offset value to zero.
Next we set up the z-index to 1 to get the container right below the checkbox element.
Next we give width, height and padding to the container.
We also need to center the hamburger lines. They are inside this container. So we use flex box for centering the div elements that inside the container.
Finally we give a background color. And we use primary color as value for the background.

## CREATING THE MIDDLE HAMBURGER LINE
We'll need to make the middle hamburger line first. Then we can use the before and after pesudo elements to create the top and bottom lines.
```CSS
.menu-wrap .hamburger > div {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
```
We first select the first div. Then we change the position of the element to relative to it's own position. Next we give width, height and background color. finally we use flex box for the the div. The reason we use flex box to centering elements. The after and before are child elements of this div. so we need to center them inside this div before applying any styles.

## CREATING THE HAMBRUGER LINES TOP AND BOTTOM
Now we'll going to create the top and bottom lines. We'll be using before and after pesudo elements to create those lines.
```CSS
.menu-wrap .hamburger > div::before,
.menu-wrap .hamburger > div::after {
    content: '';
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 2px;
    background-color: inherit;
}

.menu-wrap .hamburger > div::after {
    top: 10px;
}
```
First we select the before element and after element of the middle line. Next we give content property value to empty string.
Next we make the position property value to absolute. The reason we are making these elements position to absolute to we can control these elements positions using offset properties. To do that we need to make sure to position the parent of their elements to relative. we done that earliar in our code.
Next we set the z-index property value to 1. Next we position these two elements above to the parent element.
Next we set the width to 100% and height to 2px and we inherit the background color from the parent element.
Finally we select the after element and set the top offset property to 10px. By doing this it's going to off set below 10px.

## STARTING THE ANIMATION
We will need to use transitions and transforms to animate.Transitions are the controler for the transforms. so when we add a transition to any element we like, then we are controlong any transoforms that happening to that element. In other hand transforms are useful to change the element to something else or someplace else. 
```CSS
.menu-wrap .toggler + .hamburger > div {
    transform: rotate(135deg);
}
/* Put this inside the menu-wrap .hamburger > div selector */
transition: all 0.4s ease
```
We are saying that select the toggler element with div element that inside the hamburger element and rotate that element 135degres.
We next set up the transition by first value we give all so that means transition needs to apply to all the properties of that elements. we are not specifying any property. so they all are going to rotate. transition time takes 0.4second and transition timing to ease. we should place this property inside the div selector of the hamburger. Because we want to apply this transition to the hamburger to that div(that have after and before pesudo elements).

## ANIMATING HAMBURGER INTO X
Now we need to make a x using after and before elements. we can do that by first get those two lines in to same position as the middle line. Then next rotating them 90 degrees.
```CSS
.menu-wrap .toggler:checked + .hamburger > div::after,
.menu-wrap .toggler:checked + .hamburger > div::before {
    top: 0;
    transform: rotate(90deg);
}
```
We first select the two after and before elements when the toggler clicked. then change the top offset propery to zero. By doing that those two elements are going overlap with the parent div. so It acts like one line. Next we add the transform rotate 90deg. This causes the two lines to rotate 90deg. The final result is x mark.

## CLOSING ANIMATION
Now we want to add the closing animation. That is when we hover over to the hamburger menu it needs to do some change to indicate to the user that we closing the menu.
```CSS
.menu-wrap .toggler:checked:hover + .hamburger > div {
    transform: rotate(225deg);
}
```
We select the hamburger lines when the toggler is checked and mouse pointer is hover over the element. Next we transform to rotate 225 degrees.

## STYLING THE MENU
Now we need to start styling the menu. 
```CSS
.menu-wrap .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    /* visibility: hidden; */
}
```
First five properties we make the container. First we positioned fixed the menu container by doing this the container taken out from the normal flow. So Now we can style this independentlay without affecting to other elements flow. Next we positioned the container top left corner of our webpage and we set the width and height to 100% of the body. Finally we center the content inside the menu container.
Next we add visibility to hidden because we don't want to show this section. But In this case we comment out to for the styling purpose.

## CREATING AN OVERLAY FOR THE MENU
We will using the the immediate div to create this overlay effect.
```CSS
.menu-wrap .menu > div {
    background-color: var(--primary-color);
    border-radius: 50%;
    width: 200vw;
    height: 200vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    /* transform: scale(0); */
    transition: all 0.4s ease;
}
```
First we select the immidiate div after the menu container. First we set up a background color. And we make the border-radius to 50%. And next we set up the width and height to 200vw and 200vh. Next we center the next div item using flexbox. 
Next we set up the flex property to none to we get rid of the default values. 
Next we setup the tranform propery to scaling. We set the initial scalling to zero. and we comment out this propery for styling purpose.
Next we add the transition to all the properties. and it takes 0.4 seconds and ease for the transition timing function.


## STYLING THE NEXT DIV
Now we need to style the second div after the menu:
```CSS
.menu-wrap .menu > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    /* opacity: 0; */
    transition: opacity 0.4s ease;
}
```
First we select the second div inside the menu container. And first we set up the alignment of the text to center and we set up maximum width and height for that div.
We change the opacity to 0 because we don't want to show this because we are controling this with transtions. But we comment this our for the styling purpose. Next we add a transition for the div. But we only add transition to the opacity. Finally we set up the transition time to 0.4 seconds and transition timing function to ease.

## STYLING THE LINKS
Now we'll need to add some basic styling to the links and the text.
```CSS
.menu-wrap .menu > div > div > li {
    list-style: none;
    color: #fff;
    font-size: 1.5rem;
    padding: 1rem;
}

.menu-wrap .menu > div > div > ul > li > a {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s ease;
}
```
First we select the li inside the menu container. And change the list style to none to get rid of the  bullet points. and change the color to white and font-size to 1.5 rem. and padding to 1rem. And next we select the link and make the color inherit from the containing element. and we get rid of the underline by setting up the text decoration to none. Finally we make a transition only for the color that takes 0.4 seconds and it ease in.

## SHOWING THE MENU
Finally we'll need to show the menu when we clicked the hamburger menu. we'll using ~ symbol to act like a switch.
```CSS
.menu-wrap .toggler:checked ~ .menu {
    visibility: visible;
}

.menu-wrap .toggler:checked ~ .menu > div {
    transform: scale(1);
    transition-duration: var(--menu-speed);
}

.menu-wrap .toggler:checked ~ .menu > div > div {
    opacity: 1;
    transition: opacity 0.3 ease;
}
```
Now we select the menu when the toggler is checked then change the visibility to visible.
Next we selecct the div that after the menu and transform the scale to 1. and set up the transition-duration using a custom property.
Finally we want to display the links. we can do that by first selecting the 2nd div inside the menu and change the opacity to 1. And we set a transition propery to opacity. duration to 0.3 and ease. 

## PUTTING ALL TOGETHER
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hamburger Menu</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="menu.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
</head>

<body>
    <div class="menu-wrap">
        <input type="checkbox" class="toggler">
        <div class="hamburger">
            <div></div>
        </div>
        <div class="menu">
            <div>
                <div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <header class="showcase">
        <div class="container showcase-inner">
            <h1>Welcome</h1>
            <p>
                There's no bouncer, no gatekeeper, and no barrier to entering these scenes: You don't have to have a
                fancy resume or degree from an expecsive schoool. Online, everyone the artist and the curator , the
                master and apprentice, the expert and the amature has the ability to contribute something.
            </p>
            <a href="#" class="btn">Read more</a>
        </div>
    </header>
<section id="about">
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas, enim in eleifend aliquam, dui quam lobortis risus, sit amet ultrices leo elit id felis. Aliquam ultrices lacinia cursus. Nam scelerisque id sem sed fermentum. Pellentesque pretium efficitur enim, in porttitor ante ornare id. Sed sed 
    </p>
    <h2>Social Media</h2>	
        <div class="social">
	    <a href="#"><i class="fab fa-twitter fa-3x></i></a>
	    <a href="#"><i class="fab fa-youtube fa-3x></i></a>
	    <a href="#"><i class="fab fa-linkedin fa-3x></i></a>
            <a href="#"><i class="fab fa-facebook fa-3x></i></a>
        </div>
</section>
</body>

</html>
```
```CSS
:root {
    --primary-color: rgba(13, 110, 139, 0.75);
    --overlay-color: rgba(24, 39, 51, 0.85);
    --menu-speed: 0.75s;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.4;
}

.container {
    max-width: 960px;
    margin: auto;
    overflow: hidden;
    padding: 0 3rem;
}

.showcase {
    background: var(--overlay-color);
    position: relative;
    width: 100vw;
    height: 100vh;
    color: #fff;
}

.showcase:before {
    content: '';
    background: url(image.jpg) no-repeat center center/cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.showcase .showcase-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    gap: 10px;
}

.showcase .h1 {
    font-size: 4rem;
}

.showcase p {
    font-size: 1.3rem;
}

.btn {
    display: inline-block;
    border: none;
    background-color: var(--primary-color);
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    color: #fff;
    opacity: 0.7;
}

.btn:hover {
    opacity: 1;
}

.menu-wrap {
    position: fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
}

.menu-wrap .toggler {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 50px;
    height: 50px;
    opacity: 0;
}

.menu-wrap .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--overlay-color);
}

.menu-wrap .hamburger > div {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
}

.menu-wrap .hamburger > div::before,
.menu-wrap .hamburger > div::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 2px;
    background-color: inherit;
}

.menu-wrap .hamburger > div::after {
    top: 10px;
}

.menu-wrap .toggler:checked + .hamburger > div {
    transform: rotate(135deg);
}

.menu-wrap .toggler:checked + .hamburger > div::after,
.menu-wrap .toggler:checked + .hamburger > div::before {
    top: 0;
    transform: rotate(90deg);
}

.menu-wrap .toggler:checked:hover + .hamburger > div {
    transform: rotate(225deg);
}

.menu-wrap .toggler:checked ~ .menu {
    visibility: visible;
}

.menu-wrap .toggler:checked ~ .menu > div {
    transform: scale(1);
    transition-duration: var(--menu-speed);
}

.menu-wrap .toggler:checked ~ .menu > div > div {
    opacity: 1;
    transition: opacity 0.4s ease;
}

.menu-wrap .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
}

.menu-wrap .menu > div {
    background-color: var(--primary-color);
    border-radius: 50%;
    width: 200vh;
    height: 200vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    transform: scale(0);
    transition: all 0.4s ease;
}

.menu-wrap .menu > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.menu-wrap .menu > div > div > ul > li {
    list-style: none;
    color: #fff;
    font-size: 1.5rem;
    padding: 1rem;
}

.menu-wrap .menu > div > div > ul > li > a {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s ease;
}
```




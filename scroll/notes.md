# SMOOTH SCROLL WEBPAGE
In this small project we'll be building a webpage that have s smooth scroll effect.

## DIRECTORY STRUCTURE
Let's go and create the directory structure.
```bash
mkdir scroll
cd scroll
touch index.html styles.css
code .
```
First we create a directory using `mkdir` and provie the name for our directory. Next we navigate to that directory using `cd` command, finally we create two files using `touch` and open the directory in vscode.

## INITIAL HTML
Let's get start with writing the initial HTML page.
```html
<!DOCTYPE>
<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta charset="UTF-8"/>
		<title>SMOOTH SCROLLBAR</title>
		<link rel="stylesheet" href="styles.css"></link>
	</head>
	<body>

	</body>
</html>
```
First we add the doctype declaration that indicating to the browser that we are using latest version of HTML.
Next we create the html element. we provide the argument lang and the value as en to use the language as English.

Next we add the head element. In this element we need to provide important information about our page like how should our page behave in different devices, how the English letters are going to convert in to machine readable format. 

We done those two by adding the first meta tags. Next we give a title for our webpage.

We also need to tell the browsers that we have a external stylesheet. So we provide that by creating link tag and and give the location to the value of href attribute.

Finally we add the body tag. In here we need to build the layout for our page.


## HTML LAYOUT
Now we need to make the structure for our webpage. We will need to have a navigation bar and corresponding sections for that each navigation item.

```html
<body>
	<div class="container" class="section">
		<nav class="nav">
			<ul>
				<li><a href="#about">Home</a></li>
				<li><a href="#cases">Cases</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>

		<div id="home">
			<h1>HOME</h1>
			<p>
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			</p>
		</div>

		<div id="cases" class="section">

			<h1>CASES</h1>
			<p>
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			</p>


		</div>

		<div id="about" class="section">

			<h1>ABOUT</h1>
			<p>
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			</p>
		</div>

		<div id="contact" class="section">
			<h1>CONTACT</h1>
			<p>
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			</p>
		</div>

	</div>
</body>

```
We start with writing the navigation bar titles.(home, about, cases, contact). we know that we want those to be links so we markup them using a tag.

Next to make them as a list. we mark up those individual items using li element. we group all those li itmes inside ul element. We also group the ul tag inside the nav tag. And we give a class name called 'container' to that div.

Next we add four paragraph and a title for each paragraph. we group them using p tag and h1 tag. Next we group each h1 and p and their content inside four seperate div's that have their own id's.

## INITIAL STYLE
We'll need to reset our stylesheet, because now the style that applied to our webpage is the browser's default styles. we'll need to initially change the style before doing anything.
```CSS
* {
	margin: 0;
	padding: 0;
}

body {
	font-family: Arial, Helvetica, sans-serif;
	background: #333;
	color: #fff;
	line-height: 1.6;
	height: 100vh;
}
```
First we reset the entire html element's margin and padding to zero. We get rid of the default values.

Next we set up a fonts. We tell browser first use the Arial font, if that font unavaliable then use the Helvetica if it is unvaliable then use any sans-serif font.

Next we set up a font color by changing the color property to white. Next we set up a line height to 1.6 to increase the readablity of our webpage.

Finally we set up the height to 100vh. 1vh is equal to 1% of the viewport. 100vh equal 100% of the viewport.

## CONTAINER
Now we want to make our container that group around the nav bar to take's up the fullwidth and height of the body.

```CSS
.container {
	width: 100%;
	height: 100%;
}
```
We select the container and make the width and height of the container to 100%. This causes that container takes full width and height of the body.

## NAVAGATION BAR
Let's style the navbar.

```CSS
.navbar {
	position: fixed;
	top: 0;
	z-index: 1;
	display: flex;
	width: 100%;
	height: 60px;
	background: rgba(0,0,0,0.7);
}
```
We select the nav bar and make the position fixed and set to top value to zero. Now the nav bar is going to taken our from the normal flow and place top of our webpage.

Next we set the z-index property to 1. By doing this we say browser that this nav bar is on top of every other element.

Next we set the display property to flex. By doing this the child elements are going to taken out from the normal flow and acts like flex items.

We specify width and height to the navbar. Because in CSS we think every html elements as a box. when styling boxes we should give dimensions like width and height to every containing element.

Finally we set up a background color using rgba. rgb means red, green and blue. we set up those value to zero, that means no color. a means alpha layer. by adding alpha layer we can give a transperency. 1 equals to no transparent, 0 equals to full transparent. we give 0.7.

## UNORDERD LIST
Now we'll need to deal with the `ul` element.

```CSS
.navbar ul {
	list-style: none;
	width: 100%;
	display: flex;
	justify-content: center;
}
```
We select the ul box. We make the list style to none to get rid of the bullet points. we make the width to take up the full width of the container box.

The display of the ul box needs to be flex to get the flex items out from the normal flow. so we center the items inside the ul box by setting the justify-content to center;

## LIST ITEMS & LINKS
We'll need to add some gap in-between List items. we also need to change the color of the link text and get rid of the underlines.
```CSS
.navbar ul li {
	margin: 0 1rem;
	padding: 1rem;
}

.navbar ul li a {
	text-decoration: none;
	text-transform: uppercase;
	color: #f4f4f4;
}

.navbar ul li a:hover {
	color: orangered;
}
```
First we select the list items. we tell browser to first select the navbar then select the ul and after select the li items.

We add a margin to left and right of the every list items. But we didn't add any margin to top and bottom of the list items. The reason is that margin is for seperating the boxes one each other.

To increase the readablity of the content we add a padding in each directin of the list items.

Next we select the links. First we ged rid of the underline of the links. Next we change the link's text to uppercase. Finally we give a color for the text.

Next we select the links in hover state. When the links are in hover state we set the color to orangered.

## SECTIONS AND SECTIONS ITEMS
Now we'll need to style the sections and the h1 and p elements inside those sections.
```CSS

.section {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 100%;
	height: 100vh;
}

.section h1 {
	font-size: 4rem;
}

.section p {
	font-size: 1.5rem;
}

```

First we make the display of the section to flex. Flex display's inside items are now no longer in the normal flow.

Next we set up the direction of the flex items to column.(Top to bottom) and set the align items to center and justify-content to center. This causes to centering the flex items inside the display of the section.

Next we make change the text-align to center the text with in the section.

Finally we set up the width to 100% and height to 100vh. By doing this the width of the section is 100% of the container(body). But the height is 100% of the viewport.
Next we select the h1 and p inside the section and change the font sizes.

## BACKGROUND IMAGES
Now we'll going to add the background images for each sections.
```CSS

.section#home {
	background: url('https://images.unsplash.com/photo-1640374577565-4cd9da10bb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80') no-repeat center center/cover;
}

.section#cases {
	background: url('https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80') no-repeat center center/cover;
}

.section#about {
	background: url('https://images.unsplash.com/photo-1444465146604-4fe67bfac6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80') no-repeat center center/cover;
}

.section#contact {
	background: url('https://images.unsplash.com/photo-1470116073782-48ae2ccd8ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80') no-repeat center center/cover;
}

```

We select individual sections using the id. Next we set up a background image for them. we set up the first background property value to url().

## SCROLLING EFFECT
Now we'll need to add the smooth scorlling effect.
'''CSS
body {
	overflow: hidden;
}

.container {
	overflow-y: scroll;
	scroll-behavior: smooth;
}
'''
First we remove the scroll bar from our body by setting the overflow to hidden.

Next we select the container and set the overflow-y property to scroll. Next we change the scroll-behaviour to smooth.

## SCROLL SNAP EFFECT
We now have a scrolling effect. Now let's add scroll snap effect.
```CSS
.container {
	scroll-snap-type: y mandatory;
}
.section {
	scroll-snap-align: center;
}
```
we first select the entire container and set the scroll-snap-type property value to y axis and mandatory.

Next we select each of the sections and set the scroll-snap-align to center;

## PUTTING ALL TOGETHER
```HTML
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices laoreet arcu, eu commodo metus
                viverra
                vel.
                Aliquam facilisis condimentum massa, in aliquam mcongue leo vitae lobortis commodo.
            </p>
        </div>

        <div class="section" id="about">
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices laoreet arcu, eu commodo metus
                viverra
                vel.
                Aliquam facilisis condimentum massa, in aliquam mcongue leo vitae lobortis commodo.
            </p>
        </div>

        <div class="section" id="cases">
            <h1>Cases</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices laoreet arcu, eu commodo metus
                viverra
                vel.
                Aliquam facilisis condimentum massa, in aliquam mcongue leo vitae lobortis commodo.
            </p>
        </div>
        <div class="section" id="contact">
            <h1>Contact</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices laoreet arcu, eu commodo metus
                viverra
                vel.
                Aliquam facilisis condimentum massa, in aliquam mcongue leo vitae lobortis commodo.
            </p>
        </div>
    </div>

</body>

</html>

```
```CSS
famiy=Roboto:wght@300&display=swap');
* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #333;
    color: #fff;
    line-height: 1.6;
    height: 100vh;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.7);
}

.navbar ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: center;
}

.navbar ul li {
    margin: 0 1rem;
    padding: 1rem;
}

.navbar ul li a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
}

.navbar ul li a:hover {
    color: orangered;
}

.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
    scroll-snap-align: center;
}

.section h1 {
    font-size: 4rem;
}

.section p {
    font-size: 1.4rem;
}

.section#home {
	background: url('https://images.unsplash.com/photo-1640374577565-4cd9da10bb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80') no-repeat center center/cover;
}

.section#cases {
	background: url('https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80') no-repeat center center/cover;
}

.section#about {
	background: url('https://images.unsplash.com/photo-1444465146604-4fe67bfac6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80') no-repeat center center/cover;
}

.section#contact {
	background: url('https://images.unsplash.com/photo-1470116073782-48ae2ccd8ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80') no-repeat center center/cover;
}l

```


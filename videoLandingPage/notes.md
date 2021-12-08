# Video Landing Page
In this project we'll going to build a video landing page using only HTML and CSS. In background we'll be see video playing automatically. We can scroll down to about section. This web page is responsive. In smaller screens content are changing to fit to the screen window.

## SETTING UP THE INITIAL HTML PAGE
First we'll need to create a html page.
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Video Landing Page</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>

    </body>
</html>
```

First we tell our browser that we are using the latest versing html in our page by adding doctype declaration. Next we define the html tag and use lang attribute to describe the language we are using inside our webpage. Then we add the meta tags, first meta tag we specifiying the character that we can use with our webpage. By giving the value as UTF-8 we cover all of the characters and symbols around the world.

Then next we add a title for our webpage. After that we add a link tag. Inside link we spcifiying the relation between the rel and href as stylesheet and specifying the href attribute value as styles.css. 
Next we adding another link for a stylesheet. But this is external style that we can used to create icons. we are using this library for generating social media accounts icons.
Then finally we adding body for our page that we can write content and view them browser window.

## FILLING OUT THE BODY
We will need a basic structure to our video landing page. It will need to have two sections, first section for the video background and second section for the about section. And also some content to fill those sections such as headings, buttons and links. Let's write some html for that:
```HTML
<section class="showcase">
    <div class="video-container">
        <video src="https://traversymedia.com/downloads/video.mov" autoplay muted loop></video>
    </div>
    <div class="content">
        <h1>VIDEO LANDING PAGE</h1>
        <h3>Using HTML5 and CSS3</h3>
        <a href="#about" class="btn">Read more</a>
    </div>
</section>
<section id="about">
    <h1>About</h1>
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo </p>
    <h2>Follow me on social media</h2>
    <div class="social_media_container">
        <a href="#" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
        <a href="#" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
        <a href="#" target="_blank"><i class="fab fa-github fa-3x"></i></a>
        <a href="#" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
    </div>
</section>
```
We divide our webpage to two sections. First section containing the video, h1 heading, h3 heading and internal link to the about section. In video element first we set the src attribute to where our video is comming from. we make our video automatically played once page loads. And then we specify video to muted and start again and again by using muted and loop attributes. We also place the video element inside a div that have a class called video-container.
Next we define a section with in the showcase section. We set a class attribute and give a value as content. Inside this div we add h1 heading to indicate the main heading. The we add h3 heading to describe the h1 heading and finally we add a link to the about section of our page.
Second section contains h1, p, h2, div and a tags. we specify the header and a paragraph first. Then we add a h3 and a bunch of links to social media platforms. we use i tags and define different class for each i tags so it is going to provide social media icons for our webpage using font-awesome library.

## INITIAL STYLE 
First we need to set up the fonts, box-sizing, links and h1 elements styles:
```CSS
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

:root {
    --primary-color: #3a4052;
}

body {
	font-family: 'Open Sans', sans-serif;
	line-height: 1.5;
}

a {
	text-decoration: none;
	color: var(--primary-color);
}

h1 {
	font-weight: 300;
	font-size: 60px;
	line-height: 1.2;
	margin-bottom: 15px;
}
```
We are using open sans for the web page as font. so we get that font using @import url() element. we give the url to get the font. then we specifying a primary color to entire html page by using peseudo element called :root then we are using css custom property to store the colour that we want to reuse over and over inside the stylesheet.
Then we setting font family to use open sans or any sans-serif font and set the line-height to 1.5 in the body. Next we remove the underline of the anchor tags and sets them color by refering the primary color by using var().
Finally we setup font weight 300, font-size to 60px and line height 1.2 and giving 15px for margin bottom for our h1 element.

## STYLING THE SHOWCASE
In our showcase section we have the video element, and other h1, h3 tags. we'll going to make them center within our page. And we 'll going to make full use of our viewport for entire showcase area. Because we didn't want to show the about section in our viewport area.
```CSS
.showcase {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 0 20px;
}
```
First we set up the height of the showcase to 100vh. 1vh is equal to 1 preset of the brower viewport. so 100vh is equal to 100% of the viewport. so this leads our web page to more responsive.
we then use flexbox properties to centering the containing elements. we set up the display to be flex, and we set up the align items to center(vertically) and justify-content to center(horizontally).
we make our alignment of the text to centered. and change the text color to use white color.
Then finally we set up padding for only left and right. we do not set up padding for top and bottom. Because we centerd using flexbox.
### STYLING THE VIDEO CONTAINER
Now we can't see our about sections heading and text. so we want to display our heading text and also we want to make a fallback background for the showcase section.

```CSS
.video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--primary-color) url('./https://traversymedia.com/downloads/cover.jpg') no repeat center center/cover;
}
```
we make our video-container to be positioned absolutely. when the position absolute property is given a value of absolute, the box is taken out of normal flow and no longer affects the position of other elements on the page. so we can now show those elemnts such as h1,h3 and links.
we make the offset for the top and left are 0. and we set the width and height to be 100% of the containing element.
Next we set up the overflow to be hidden. The overflow property tells the browser what to do if the content contained within a box is larger that the box itself. So when we set to be hidden, that leads to hides any extra content that does not fit in the box.
Finally we set up a fallback background for our page.

### LIMITING THE WIDTH AND HEIGHT OF THE VIDEO
Now the problems comes with then we make our page smaller. so the entire video background is not coverd. To fix that we can use the min-width and min height proprities:
```CSS
.video-container video {
	min-width: 100%;
	min-height: 100%;
    position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%); 
	object-fit: cover;
}
```
we use min-width and min-height properties to cover the entire video in background. Then we positioned the video to be absolutesly. Because we want to the text appear over the video. It leads to choping the background by half. So we used off set properties to get to the right position. and we use tranform translate function to make our video fit to the entire container. Then finally we use object-fit property to fit our image for smaller size.

### ADDING DARKNESS TO THE VIDEO 
Our video is too bright. To remove that we'll need to make our video darker.
```CSS
.video-container:after {
    content: '';
    z-index: 1;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0);
}
```
we selecting the pesudo element after the video container. Then we make the contet of that pesudo element to be blank. giving the z-index to one we specfiy that this background is going to appear on top of every element. then we specify the height and width to be 100%. setting the position to be absolute we tell browser to take out this element from normal flow. so now this element is no longer affect to other elements positions. we are not giving any offsets. finally we ad a background to this element by using rgba.

### MAKING TEXT APPEAR ON THE SCREEN
Now we need to make the text appear on the showcase section.
   ```CSS
    .content {
        z-index: 2;
    }
   ```
We select the content element and set the z-index property value to be 2. previosily we set the pesudo element z-index to 1 and now we set our content z index to 2. This leads that the content is going to appear on top of everything. so we can see our content now.


### CREATING THE BUTTON
Let's style the link that inside the showcase. we want make it as a button.
```CSS
.btn {
    display: inline-block;
    padding: 10px 30px;
    background: var(--primary-color);
    color: #fff;
    border-radius: 5px;
    border: solid #fff 1px;
    margin-top: 25px;
    opacity: 0.7
}
.btn:hover {
    tranform: scale(0.98);
}
```
Our link is a inline element. By making the anchor tag inline block we can specify with and height for the element. So we make padding top and bottom 10px and left and right 30px. we set up a background for the button by using background propery.  we use the property value as the css custom property. The text color is white. And we give a solid white border and make the border-radius to 5px. and we give some margin on top and make transparent our element.
And finally we are giving some hover effect by selecting the hour state of the element.

### STYLING THE ABOUT SECTION
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

## PUTTING ALL TOGETHER
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Landing Page</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
    <body>
        <section class="showcase">
            <div class="video-container">
                <video src="https://traversymedia.com/downloads/video.mov" autoplay muted loop></video>
            </div>
            <div class="content">
                <h1>VIDEO LANDING PAGE</h1>
                <h3>Using HTML5 and CSS3</h3>
                <a href="#about" class="btn">Read more</a>
            </div>
        </section>
        <section id="about">
            <h1>About</h1>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  </p>
            <h2>Follow me on social media</h2>
            <div class="social">
                <a href="#" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
                <a href="#" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
                <a href="#" target="_blank"><i class="fab fa-github fa-3x"></i></a>
                <a href="#" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
            </div>
        </section>
    </body>
</html>
```
```CSS
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

:root {
    --primary-color: #3a4052;
}

body {
	font-family: 'Open Sans', sans-serif;
	line-height: 1.5;
}

a {
	text-decoration: none;
	color: var(--primary-color);
}

h1 {
	font-weight: 300;
	font-size: 60px;
	line-height: 1.2;
	margin-bottom: 15px;
}
.showcase {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 0 20px;
}

.video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--primary-color) url('./https://traversymedia.com/downloads/cover.jpg') no repeat center center/cover;
}

.video-container video {
	min-width: 100%;
	min-height: 100%;
    position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%); 
	object-fit: cover;
}

.video-container:after {
	content: '';
	z-index: 1;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	position: absolute;
}

.content {
	z-index: 2;
}

.btn {
    display: inline-block;
    padding: 10px 30px;
    background: var(--primary-color);
    color: #fff;
    border-radius: 5px;
    border: solid #fff 1px;
    margin-top: 25px;
    opacity: 0.7
}

.btn:hover {
	transform: scale(0.98);
}

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

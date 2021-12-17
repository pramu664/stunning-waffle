# PDF VIEWER
Today we are going to build a PDF viewer using HTML, CSS, JavaScript. We are getting the help of *pdfjs* javaScript library to build this project. If you want only the code you can scroll down to the bottom of this note and copy down the three HTML, CSS JavaScript files. If you want to learn about how to create this project you can follow the step by step guide in here. I also create a video version of this project that giving help and assistence about how to build this project.

## GETTING STARTING 
First let's create the initial html page for our application. This section our intentions are to give information about our webpage to the browse. We'll need to specify the meta tags, external links to styles and scripts.
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PDF Viewer</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"
        integrity="sha512-t2JWqzirxOmR9MZKu+BMz0TNHe55G5BZ/tfTmXMlxpUY8tsTo3QMD27QGoYKZKFAraIPDhFv56HLdN11ctmiTQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="script.js"></script>
    </body>
</html>
```
    First we say to browser that we are using the latest version of HTML by adding the doctype tag. Next we add the html tag and also we add an attribute call lang and give that attirbute value to *en*. By doing this we say browser to we are using English as the language of our application.
After that we set up the head section with two meta tags, title and two link tags. First meta tag we tell browser to use the *UTF-8* character encoding to convert the characters of html page to machine readable code.
And next meta tag we define the viewport. first we say that content width needs to be use the screen width. and then we give that initial zoom for just 1.5.
Next we link to our styles and third party styles by using link tags. we use font-awesome for create icons for our application.
Finally we define the body. Inside the body we add two script tags. first one is our own script tag that we link to different file using scr atttibute and next we link to the pdfjs library.

## CREATING THE STRUCTURE OF THE APPLICATION
We'll want to add a simple navagation bar on top of the pdf. Inside the  nav bar we will want buttons to go next page and previous page and also we'll want to create the page number information. For example: page 2 of 434. we'll also need to canvas element. We can render the PDF file in the canvas by using JavaScript later in our code.
```HTML
<div class="navBar">
    <button class="btn" id="prev-page">
        <i class="fas fa-arrow-circle-left"></i>Prev page
    </button>
    <button class="btn" id="next-page">
        Next page<i class="fas fa-arrow-circle-right"></i>
    </button>
    <span class="page-info">
        Page<span id="page-num"></span> of </span id="page-count"></span>
    </span>
</div>

<canvas id="pdf-render"></canvas>
<div class="menu"></div>
```
First we create a div container that has a class called navBar to group the buttons and page information. Inside the container first we create the Prev page button and give a class name called `btn` and a id called `prev-page`. Inside that button we add left arrow icon using font-awesome CSS library. we done similar thing for the next button but we use different icon. Next we add a span that have a class called `page-info` to to include the page information. 
Next we add a canvas element with id of canvas. we use this canvas for rendering pdf files.
Finally we create a div for the table of contents that has a class called `menu`.

## INITIAL JAVASCRIPT SETUP
We want to keep track of some important information like the location of our pdfs, page number, page has renderd or not, pending number. And also we'll want to store scale for our document. And more importantally we need to setup the canvas. If you go and look to documentation of the *pdfjs* these information needs to include top of our script. Let's do all those things now:
```JavaScript
const url = 'sample.pdf';
const scale = 1.5;

let pdfDoc = null;
let pageRendering = false;
let pageNumPending = null;
let pageNum = 1;

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
```
First we set up the url for our pdf files. we use string to represent the location of our pdfFile.
Then we set up initial scale for the pdf document. we can change if we want. But we set up that to 1.5 number.
Next we create three variables. Notice that we use let keyword every one of variabels. Because they are changing with the state of the pdf file.
Finally we set up the canvas. First we get the canvas object using querySelector method. then we set up context object by using setContext method and passing 2d as the argument for the `getContext()` method.

## GETTING THE PDF
To get the pdf we'll need to use the functions that provide by pdfjs library.
```JavaScript
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    console.log(pdfDoc)
});
```
pdfjsLib object have a function call `getDocument()`. We give the url of our pdffile as argument to that method. when we done that that function give us a promise. once we get the pdf object we pass that to anonymous function.
In that function we assign that pdf object in to the pdfDoc variable.

## ADDING THE TOTAL NUMBER OF PAGES   
Now we'll want to add the page numbers to our document span element that have a class called page-count.
```JavaScript
pdfjsLib.getDocment(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
});
```
    We select the span element that needs to store the total number pages by using querySelector method. then we change that element's textContent to the total number of pages by using pdfDoc.numPages variable value.
    Finally once we get the document we want to render the page to the viewport. to do that we want to define a new function called renderPage. we haven't define that yet, we can do that in next section.

### RENDERING THE FIRST PAGE
In this section we'll going to create a function to render pages to the browser window. 
``JavaScript
const renderPage = num => {
    pageRenderning = true;

    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({scale});
        canvas.height = viewport.height;
        canvas.width = viewport.width

        const renderCtx = {
            canvasContext: ctx,
            viewport: viewport
        };

        page.render(renderCtx).promise.then(() => {
            pageRenderning = false;

            if (pageNumPending !== null) {
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }

        });
    });
    document.querySelector('#page-num').textContent = num;
}
```
We define a arrow function call renderPage. We give the page number as argument to the function. Inside the function we set up the pageIsRendering variable value to true to indicate that still page is rendering. 

Next we call the `getPage()` method and pass the number as argument. this function give us a promise we get that promise object and we call it as page and pass that in to anonymous function.

Inside the anonymous function we get a viewport object that have a height and width values. To get those we need to pass a scale as an object. After getting the viewport object. we set up height and width of our canvas using the values of viewport object. 

After that we setup a object called renderCtx has a property called canvasContext.

Next we call the render method on page object and pass the renderCtx object. when we do that it give a promise, once the promise give we call an anonymous function.

Inside that function the we set up the pageIsRenderning variable value to false. 

Next we set up a condition that If the pageNumPending not equal to null we render that page and set up the pageNumIsPending to null.

Finally we set up the current number on the page selecting the span element that have a id called page-num and chaning the text content to number.

## ADDING TABLE OF CONTENT
Now we'll going to add table of content section for our application. We can do that by using a method called getOutline().
```JavaScript
pdfDoc.getOutline().then(outline=>{
    outline.forEach(outline => {
	const title = outline.title;
	const el = document.createElement('div');
	el.innerText = outline.title;
	document.querySelector('.menu').append(el);
    });
});
```
We start with calling the `getOutline` method on the pdfDocument object. It then returns the outline as an array of chapters of the pdf document.
By using `forEach` array method we loop through each array item and pass that array item in to anonymous function.
 Next we get the title of one chapter. and We create an div element and assign that to the el variable. Next we change the innerText of that element to the title.
 Finally we append that to the menu.

## SETTING UP THE PREVIOUS PAGE AND NEXT PAGE FUNCTONS
Now our application have the ability to show pages. But we can't navigate to next and previous pages. We'll going to get that features done by creating three functions.
```JavaScript
const showPrevPage = () => {
    if (pageNum <= 1) {
        return;
    } else {
        pageNum--;
        queueRenderPage(pageNum);
    }
}

const showNextPage = () => {
    if (pageNum >= pdfDoc.numPages) {
        return;
    } else {
        pageNum++;
        queueRenderPage(pageNum);
    }
}

const queueRenderPage = num => {
    if (pageIsRenderning) {
        pageNumIsPending = num;
    } else {
        renderPage(num);
    }
}
```
We setup a function call queueRenderPage that takes number as argument. Inside the function we setup a condition to check what is the state of our pdf document is in. If it in rendering state then we set up the pageNumIsPending to num. else meaning after render the page we call the renderPage and give num as an argument.

We use this function to effetively render pages. In showPrevPage function first we ask a question that if the page number is less than or equal to 1 then return from the function. else decrement the page number by one and call the queryRenderPage function.
    
Finally we define a function call showNextPage, in that function first we set up a condition that if the pageNum is greater than the total number of pages then return. else increment the pageNumber by one and call the queue function with the arugument of pageNum.

## CALLING THE PREVIOUS AND NEXT PAGE FUNCTIONS
Now we want to call these function when we press previous or next buttons inside the html page.
```JavaScript
document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);
```
Now we select the button that have a id called prev-page and add a click event, that listening for click event and fires the showPrevPage. Next we select the button that have  a id called next-page and add a click event, that listenning for click event and fires the showNextPage function.

## STYLING THE NAVIGATION BAR
Now we want to give some style for the navigation bar. we'll want to first setup the stylesheet. and then style the navigation bar.
```CSS
* {
    margin: 0;
    padding: 0;
}

.navBar {
    position: fixed;
    background-color: #333;
    color: #fff;
    padding: 1rem;
    width: 100vw
    z-index: 2;
}
```

Next we select the entire html page an make all the page elements maring and padding to zero. Now we know that all the elements doesn't have any padding or margin.
We set up the position to fixed. This causes the navagation bar to taken out from the normal flow and position relative to the root element.
We change the background color to use dark grey. and we change the text color to white. and we give padding in between content and the border of the top bar.
Finally se set up the z-index property to 2 because this nav bar needs to the top most element.

## STYLING THE BUTTONS
Now we need to style the buttons and the span elements and text inside those buttons.
```CSS
.btn {
    background-color: coral;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.7rem 2rem;
    z-index: 2;
}
.btn:hover {
    opacity: 0.9;
}
.page-info {
    margin-left: 1rem;
}
```
    We select the two buttons using the class selector, then we set up each of those buttons background color to use coral background. the we change the font color to white. then we remove the border styling by setting up the border to none. and we remove the outline around the buttons by setting the outline propery value to none. Next we set the cursor to pointer. Next we give padding in between the text and the border. we give 0.7rem padding to top and bottom and 2rem padding to left and right.
    Next when our buttons are in hover state we change there opacity to 90 present.
    Finally we give margin to left side in between the next button and the div tag that has a class called page-infor.

## STYLE FOR ERROR
Finally we'll need some style for if the book is not loaded for the page.
```CSS
.error {
    background-color: orangered;
    color: #fff;
    padding: 1rem;
}
```
## HANDLING THE ERROR
When there is no any document to show we can catch an error and handle those error using javaScript. we'll need to create an element and show the error. and we'll need to get rid of the navBar and menu.
```JavaScript
.catch(err => {
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    document.querySelector('.navBar').style.display = 'none';
    document.querySelector('.menu').style.display = 'none';
});
```
    We set up catch function right below the getDocument, First we create a div element. we use createElement method for that. then we give that element a className call error. then we add a text that using the error message text. we use createTextNode method for that. It take the argument some text, so provide the error message as text.
    Next we select the body and insert our div before the canvas element. we use insertBefore method. we give first argument the div we want to insert and second argument the canvas element.
    Finally we select the div container that have a class called top-bar and make the display hidden. we change the style object's display value to none to hide the top bar.
    
## PUTTING ALL TOGETHER
Now let's get all the building blocks and put them all together.

```HTML
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Viewer</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="top-bar">
        <button class="btn" id="prev-page">
            <i class="fas fa-arrow-circle-left"></i>Prev page
        </button>
        <button class="btn" id="next-page">
            Next page<i class="fas fa-arrow-circle-right"></i>
        </button>
        <span class="page-info">
            Page <span id="page-num"></span> of <span id="page-count"></span>
        </span>
    </div>

    <canvas id="pdf-render"></canvas>

    <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
    <script src="script.js"></script>
</body>

</html>
```
```CSS
* {
    margin: 0;
    padding: 0;
}

.top-bar {
    background-color: #333;
    color: #fff;
    padding: 1rem;
}

.btn {
    background-color: coral;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.7rem 2rem;
}
.btn:hover {
    opacity: 0.9;
}

.page-info {
    margin-left: 1rem;
}

.error {
    background-color: orangered;
    color: #fff;
    padding: 1rem;
}
```
```JavaScript
const url = 'docs/JavaScript.pdf';
const scale = 1.5;

let pdfDoc = null;
let pageNum = 1;
let pageIsRendering = false;
let pageNumIsPending = null;

const canvas = document.querySelector('#pdf-render');
const ctx = canvas.getContext('2d');

const renderPage = num => {
    pageIsRenderning = true;

    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width

        const renderCtx = {
            canvasContext: ctx,
            viewport
        };

        page.render(renderCtx).promise.then(() => {
            pageIsRenderning = false;

            if (pageNumIsPending !== null) {
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
            document.querySelector('#page-num').textContent = num;
        });
    });
}

const showPrevPage = () => {
    if (pageNum <= 1) {
        return;
    } else {
        pageNum--;
        queueRenderPage(pageNum);
    }
}

const showNextPage = () => {
    if (pageNum >= pdfDoc.numPages) {
        return;
    } else {
        pageNum++;
        queueRenderPage(pageNum);
    }
}

const queueRenderPage = num => {
    if (pageIsRenderning) {
        pageNumIsPending = num;
    } else {
        renderPage(num);
    }
}

pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    document.querySelector('#page-count').textContent = pdfDoc.numPages;
    renderPage(pageNum);
})
    .catch(err => {
        const div = document.createElement('div');
        div.className = 'error';
        div.appendChild(document.createTextNode(err.message));
        document.querySelector('body').insertBefore(div, canvas);

        document.querySelector('.navBar').style.display = 'none';
        document.querySelector('menu').style.display = 'none';
    });

document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);
```

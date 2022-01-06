## NewsLetter
This projet we'll building a Newsletter signup form using *Node.js* with *Express* and Mailchimp API.

Newsletters are great way to connect with customers in business. We can send emails directly for the users using newsletter a newsletter. But in this app we'll be building a form that new users can sign in to our newsletter. 

*Node* is a open source cross-platform runtime environment for executing JavaScript code outside of the borwser.
We 'll be using *Node* is to build our *Server*. Server kind a library. In libray we store books, we can borrow books. In *Server* we can store data and request data. 

Buidling our own server is lot of work so we are using *Express* for to do the heavy lifting for us. *Express* is a web framwork that have many useful functions build up for us to use without reimplement them over and over.

We'll be using an api called *mailchimp*. Api means Application prgramming interface. We know that user interfaces for interacting with users or humans. we can use Aplication programming interfaces for talking program with any other program. In this case our newsletter app and mailchimp.
So our server in going to interact with *mailchimp* api for the managing user details more cleanly.

We'll be need user interfaces for taking information from the users and we'll need server for storing those information. and we'll be partneard with *mailchimp* for better management of the user details. 

## STRUCTURE
Using our program userinterface(sign up form), users can provide there information like first name, last name and email address.

Once the sign up buttons pressed, those data going for our server.

From the server those data going to provide to the mailchimp. Mailchimp will list them cleanley so that we can access our subscribers information whenever we want.

Finally if that is success, we redirect to a success page.

## GETTING THE NODEJS AND NPM
First we'll need to download *nodejs* and *npm*. NodeJS is a environment that we can execute JavaScript code. npm is a package manager and online repository of JavaScript modules. Once we install the npm we can get the `npm` command, which we can interact with that repository.
Open the ubuntu terminal and write the following commands.

```bash
sudo apt install nodejs
node --version
sudo apt install npm
npm -v
```
First we install nodejs. then we make sure that by checking the version of the nodejs.
Next we install npm. This will take sometime to install.
Finally we make sure that by checking the version of the npm.

## DIRECTORY STRUCTURE
Now we'll going to create our directory structure and create necessary files for our app.
```bash
mkdir newsLetter
cd newsLetter
npm init
```
First we make a directory and change in to that directory.
Next we create a *package.js* file. This file contains information about our app and list of dependencies.. we also provided those information. You can give information you like or ignore them. 

We now see a new file called *package.json* file inside our directory. Json files are used to store data in key value format.

## INSTALLING EXPRESS REQUEST BODY-PARSER
Now we'll need to install the couple of things. express is the web framework, request for the mailchimp and body-parser for to parsering the user information. we can install them using one line.
```bash
npm i express request body-parser
```
*i* stands for install, then we install the *express* *request* and *body-parser*.
Now we can see there is a new file called *package-lock.json*. But more intersting things are inside the *package.json* file. That file we can see the install packagers inside dependencies.

## INSTALLING NODEMON
Now we'll need to install nodenom for avoiding the keep restarting our server when we make changes to our server.
```bash
npm i -D nodemon
```
*-D* stands for devDependency.

## WRITING INITIAL SCRIPTS INSIDE PACKAGE.JSON
Next we'll need to write a couple of scripts called *start* and *dev* inside the package.json file.
```JSON
{
    "scripts": {
        "start": "node app",
        "dev":"nodemon app"
    }
}
```
```bash
touch app.js
```
First we remove the start value and add the *node app* and we create new key value pair called `"dev": "nodemon app`.
Finally we create a new file called index.js

## IMPORTING ALL THE INSTALLED LIBRARIES
First thing we'll need to do is importing all the libraries to our *app.js* file.
```JavaScript
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path')
```
`require()` takes the name of a module as a string argument and returns a module as an object. Modules contains useful functions that prebuilt for us that we don't need to worry about creating them over and over. 
We first get the module of *express* that have a prebuilt functions that we can used to dealing with common web develompent related tasks like signup, signin and many more.
Next we get the module of *request* for to deal with *HTTP calls*. 
We import the *bodyParser* module for to handle *HTTP POST* request. 
Next we import the *path* module that we can interact with *filesystem* easily. Path module has many useful *properties* and *methods* to access and manipulate *paths* in the *file system*.

## CREATING NEW EXPRESS APPLICATION
Now we'll need to create an *express application*.
```JavaScript
const app = express();
```
We call the `express` class and it returns an object of that class and we save that in to variable called `app`. In other words when we call the function express and puts new express application inside a variable called app.

## STARING THE SERVER
First' we'll need to set up a *port* manually. And after that we'll can start our server on that port.
```JavaScript
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on ${PORT}`));
```
First we create a port for our server to run. we use port 5000. If it is not working we can use another port number like port 3000.


```bash
npm  run dev
```
we start our server by using `Dev`. Next we can navigate to our server on browser form `localhost:5000`. If the server is not properly working change the port number to 3000.
we need to type localhost:3000 in google search bar for navigating to our application interface.

## SERVING STATIC FILES
Now we'll need server static files:
```JavaScript
app.use(express.static(path.join(__dirname, 'public')));
```
We define our root folder for the static files. Next we'll need to create that folder and initial html page.
```bash
mkdir public
cd public
touch index.html
```
```html
<!DOCTYPE html>
    <html lang="en">
        <head>
	    <meta charset="UTF-8" />
	    <meta name="viewport" content="width=device-width" />
	    <title>Home</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>
	<body>
	    <h1>Hello</h1>
	</body>
    </html>
```
```bash
npm run Dev
```
We run our server again using npm also we'll now create the other files as well.

## CREATING SUCCESS AND FAIL PAGES	
Now we'll can create the other pages in our application.

```bash
touch success.html fail.html

```
we use touch command to create two new files. we copy paste the same html to those pages and change the title and h1 in order success and fail.
In borwser we can navigate to those pages `localhost:3000/success.html` or `localhost:3000/fail.html`
we also  add two external stylesheets called bootstrap and font-awesome. we use those to style our application.

## CREATING THE SIGN IN FORM
Now we'll need to create our user interface. we can do that in index.html page and  we'll be using font-awesome icons and bootrstrap classes to style the page.

```HTML
  <div class="container">
    <section class="row mt-5 text-center">
      <div class="col-md-6 m-auto">
        <h1><i class="fas fa-newspaper fa-2x"></i></h1>
        <h1 class="display-4">Newsletter Signup</h1>
        <p class="lead">
          Enter your info to get our awesome monthly newsletter
        </p>
        <form action="/signup" method="POST">
          <div class="form-group">
            <input type="text" name="firstName" id="first-name" class="form-control" placeholder="First Name"
              required />
          </div>
          <div class="form-group">
            <input type="text" name="lastName" id="last-name" class="form-control" placeholder="Last Name" required />
          </div>
          <div class="form-group">
            <input type="email" name="email" id="email" class="form-control" placeholder="Email" required />
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  </div>
```
We create three input elements that have a name attribute called firstName and LastName. We'll be using them inside our server to get the values.

## GETTING USER DETATILS TO OUR SERVER
Now when the user submitted to our form we need their information like firstName, LastName and email. 

```JavaScript
	// Bodyparser Middleware
	app.use(bodyParser.urlencoded({ extended: true }));

	//Signup Route
	app.post('/signup', (req, res) => {

		console.log(req.body);
		res.send('Thank you!!');

	});
```
If we want to accept form data we need to add bodyparser middleware.
If there is post request to the server, pass that req and res as an arguments to arrow function. After that console log the body of the request. and send a respons back to user saying 'Thank you!'.

## PULLING OUR THE USER DETAILS TO SEPERATE VARIABLES AND VALIDATING THEM
To work with that data we need bind them in to separate binders.

```JavaScript
app.post('/signup', (req, res) => {

	const {firstName, lastName, email} = req.body;

	if (!firstName || !lastName || !email) {
		res.redirect('/fail.html');
		return;
	}
});

```
We get the data into seperate variables called firstName, lastName and email. Next if there are no any user details, in other words if they are empty we redirect them to our fail.html page and return.

## SENDING DATA TO THE MAILCHIMP
Now we need to create an object that have options. Before we doing that we need to signUp to mailchimp and create a new account.

```JavaScript
const data = {
	members : [
		{
			email_address: email,
			status: 'subscribed',
			merge_feilds: {
				FNAME: firstName,
				LNAME: lastName
			}
		}
	]
}

const postData = JSON.stringify(data);

const options = {
	url : 'https://us20.api.mailchimp.com/3.0/lists/95bcb398ad';
	method: 'POST',
	headers: {
		Authorization: 'auth b29aaf64c34fb2a976ea89ba91f949c1-us20'
	},
	body: postData
}

request(options, (err, response, body) => {
		if (err) {
			res.redirect('/fail.html');
			} else {
			if (response.statusCode === 200) {
				res.redirect('/success.html');
				} else {
					res.redirect('/fail.html');
				}
			}
})

```
First we create an object containing information about url that we are sending our userinformation, method that we are using, api key for authorization, and the userinformation(body).
Next we create a an object containing the information about current sign in user. We included email, first name and last name. That is in JSON format before sending that data over network we need to convert them to string format. we done that by using `JSON.stringify()`
Next we use request to send the data to the mailchimp. as a first argument we included the options, If there have any error we redirect to the fail.html page, if the status code 200 then we redirect the user to the success.html and if not we redirect the user to the fail.html page.
We can look at our users data in list format nicely in the contacts section of the mail chimp. We can send emails to them now. we can delete them, unsubscribe them.
More importantly now we know to build up a form that can collect emails for us not relaying on other web applications that doing that for us.

## SUCCESS AND FAIL PAGES HTML CODE
Now we need to create the success and fail pages.

```HTML
	<div class="container">
		<section class="row mt-5 text-center">
			<div class="col-md-6 m-auto">
				<h1><i class="fas fa-thumbs-up fa-2x"></i></h1>
				<h1 class="display-4">Success!</h1>
				<p class="lead">
					You are now signed up for our awesome montly newsletter!
				</p>
				<a class="btn btn-secondary" href="/">Back</a>
			</div>
		</section>
	</div>
```
```HTML
	<div class="container">
		<section class="row mt-5 text-center">
			<div class="col-md-6 m-auto">
				<h1><i class="fas fa-times-octagon fa-2x"></i></h1>
				<h1 class="display-4">Sorry!</h1>
				<p class="lead">
					Something went wrong, please go back and make sure all fields are
					filled in correctly
				</p>
				<a class="btn btn-secondary" href="/">Back</a>
			</div>
		</section>
	</div>
```

























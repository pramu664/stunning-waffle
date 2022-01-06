
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {

    const { firstName, lastName, email } = req.body;

    if (!firstName || !lastName || email) {
        res.redirect('/fail.html');
        return;
    }

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscrbed',
                merge_feilds: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const postData = JSON.stringigy(data);

    const options = {
        url: 'https://us20.api.mailchimp.com/3.0/lists/95bcb398ad',
        method: "POST",
        headers: {
            Authorization: 'auth b29aaf64c34fb2a976ea89ba91f949c1-us20',
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
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server start on ${PORT}`));




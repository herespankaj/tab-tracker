const express       = require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const morgan        = require('morgan');

const app = express(); // builds an express server 

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(cors()); 

app.listen(process.env.PORT || 8081);

app.post('/register', (req, res) => { 

    var email = req.body.email;
    var password = req.body.password;

    res.send({

        message: 'Hello ' + email + ' Your user was registered. Have fun !!! \n Your Password is ==>' + password

    });
})



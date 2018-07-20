
const express       = require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const morgan        = require('morgan');

const app = express(); // builds an express server 

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors()); 

app.get('/status', (req, res) => { 

    res.send({
        message: 'Hello World !!!'
    })
})

app.listen(process.env.PORT || 8081);




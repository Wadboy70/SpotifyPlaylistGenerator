//This is the library used to get info from the .env
require('dotenv').config();


const express = require('express');
const app = express();

//this is how you make a get endpoint
app.get('/', (req,res) => {
    res.send('hello!');
});
//this is how you make a get endpoint that returns a json
app.get('/json', (req,res) => {
    res.send({json:'i am a jason :)'});
});

//The following line starts the server
app.listen(process.env.PORT || 5000, () => console.log(`App now listening on port 5000`));

//This is the library used to get info from the .env
require('dotenv').config();

const express = require('express');
const app = express();

const { PORT, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

//this is how you make a get endpoint
app.get('/', (req,res) => {
    res.send('hello!');
});
//this is how you make a get endpoint that returns a json
app.get('/json', (req,res) => {
    res.send({json:'i am a jason :)'});
});

const scopes = 'user-read-email playlist-read-collaborative playlist-modify-public user-top-read playlist-read-private user-read-recently-played playlist-modify-private user-library-read';

//spotify authenticate flow
app.get('/authorize', (req,res) => {
    let authorizeUrl = {
        url: 'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + CLIENT_ID +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(REDIRECT_URI)
    }
    res.json(authorizeUrl);
});

//The following line starts the server
app.listen(PORT || 5000, () => console.log(`App now listening on port ${ PORT }`));

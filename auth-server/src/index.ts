

import express from 'express';
import cookieParser from 'cookie-parser';
import querystring from 'querystring';
const env = require("dotenv").config();

const REDIRECT_URI = process.env.BASE_URL + '/callback';

const SCOPE: Array<string> = [
    'ugc-image-upload',
    'user-read-recently-played',
    'user-top-read',
    'user-read-playback-position',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-follow-modify',
    'user-follow-read',
    'user-library-modify',
    'user-library-read',
    'user-read-email',
    'user-read-private',
]

const stringScope = () => SCOPE.join(' ');

const URL = 'https://accounts.spotify.com/authorize?response_type=code' +
    '&client_id=' + process.env.CLIENT_ID
SCOPE ? '&scope' + encodeURIComponent(stringScope()) : '' +
    '&redirect_uri=' + encodeURIComponent(REDIRECT_URI || '');

const generateRandomString = (length: number) => {
    var text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

var app = express();

const stateKey = 'spotify_auth_state';

app.use(express.static(__dirname + '/public'))
    .use(cookieParser());

app.get('/login', (req: express.Request, res: express.Response) => {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: process.env.CLIENT_ID,
            scope: SCOPE,
            redirect_uri: REDIRECT_URI,
            state: state
        })
    );
});

app.get('/callback', (req: express.Request, res: express.Response) => {
    
});

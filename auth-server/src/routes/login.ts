
import querystring from 'querystring';

import generateRandomString from '../common/generateRandomKey';
import { stringScope } from '../common/scope';
import { stateKey } from '../common/stateKey';

import { Request, Response } from 'express';

require('dotenv').config();
const {
    BASE_URL,
    CLIENT_ID
} = process.env;
const REDIRECT_URI = BASE_URL + '/callback/';


const loginRoute = (req: Request, res: Response) => {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: CLIENT_ID,
            scope: stringScope(),
            redirect_uri: REDIRECT_URI,
            state: state
        }));
}

export default loginRoute;
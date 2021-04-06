
import request from 'request';
import querystring from 'querystring';
import { stateKey } from '../common/stateKey';
import encrypt from '../common/security';

import { Request, Response } from 'express';

require('dotenv').config();
const {
    CLIENT_SECRET,
    CLIENT_ID,
    CLIENT_APP_URL,
    BASE_URL,
} = process.env;

const REDIRECT_URI = BASE_URL + '/callback/';

const callbackRoute = (req: Request, res: Response) => {

    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: REDIRECT_URI,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                var options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                // use the access token to access the Spotify Web API
                request.get(options, function (error, response, body) {
                    // console.log(body);
                });

                // we can also pass the token to the browser to make requests from there
                res.redirect(CLIENT_APP_URL + '/#' +
                    querystring.stringify({
                        access_token: encrypt(access_token).toString(),
                        refresh_token: encrypt(refresh_token).toString()
                    }));

            } else {
                res.redirect(CLIENT_APP_URL + '/#' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));


            }
        });
    }
}

export default callbackRoute;
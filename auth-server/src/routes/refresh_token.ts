import request from 'request';
import { Request, Response } from 'express';

import { encrypt, decrypt } from '../common/security';

require('dotenv').config();
const {
    CLIENT_ID,
    CLIENT_SECRET
} = process.env;


const refreshTokenRoute = (req: Request, res: Response) => {

    // requesting access token from refresh token
    var refresh_token = decrypt(req.query.refresh_token as string);

    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.status(200).send({
                'access_token': encrypt(access_token)
            });
        } else {
            res.status(400).send({
            });
        }
    });
}

export default refreshTokenRoute;
import express from 'express';

import {
    callbackRoute,
    loginRoute,
    refreshTokenRoute,
} from './routes/package';


const router = express.Router();

router.get('/login', loginRoute);
router.get('/callback', callbackRoute);
router.get('/refresh_token', refreshTokenRoute);

export default router;
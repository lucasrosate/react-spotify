import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import router from './router';
import cors from 'cors';

require("dotenv").config();
const {
    BASE_URL,
    PORT,
} = process.env;


var app = express();

app.use(cors())
    .use(cookieParser())
    .use(router);

app.listen(PORT, () => {
    console.log("Auth-server is online, url: " + BASE_URL + ", PORT: " + PORT);
});
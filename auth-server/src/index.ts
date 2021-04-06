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
    console.log("URL: " + BASE_URL);
    console.log("Listening on PORT: " + PORT);

});
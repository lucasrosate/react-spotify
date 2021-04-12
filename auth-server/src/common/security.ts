import CryptoJS from 'crypto-js';
import AES from 'crypto-js/aes';
require('dotenv').config();

const { PARAM_TOKEN } = process.env;

export const encrypt = (text: string) =>
    AES.encrypt(text, PARAM_TOKEN as string).toString();

export const decrypt = (text: string) =>
    CryptoJS.AES.decrypt(text, PARAM_TOKEN as string).toString(CryptoJS.enc.Utf8);


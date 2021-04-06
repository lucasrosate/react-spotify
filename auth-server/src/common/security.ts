import AES from 'crypto-js/aes';
require('dotenv').config();

const { PARAM_TOKEN } = process.env;

const encrypt = (text: string) => AES.encrypt(text, PARAM_TOKEN as string).toString();

export default encrypt;
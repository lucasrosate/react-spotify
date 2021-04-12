import CryptoJS from 'crypto-js';

const { REACT_APP_PARAM_TOKEN } = process.env;

const decrypt = (text: string) =>
    CryptoJS.AES.encrypt(text || '', REACT_APP_PARAM_TOKEN as string).toString();
export default decrypt;
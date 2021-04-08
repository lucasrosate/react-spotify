import CryptoJS from 'crypto-js';

const { REACT_APP_PARAM_TOKEN } = process.env;

const decrypt = (text: string) =>
    CryptoJS.AES.decrypt(text || '', REACT_APP_PARAM_TOKEN as string).toString(CryptoJS.enc.Utf8);
export default decrypt;
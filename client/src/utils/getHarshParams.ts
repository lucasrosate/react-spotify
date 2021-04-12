import decrypt from './decrypt';

interface Result {
    access_token: string,
    refresh_token: string,
    success: boolean
}

export default function getHarshParams(): Result {
    var harshParams: any = {};

var e;
const r = /([^&;=]+)=?([^&;]*)/g;
var q = window.location.hash.substring(1);

while (e = r.exec(q)) {
    harshParams[e[1]] = decodeURIComponent(e[2]);
}

if (!harshParams.error) {
        console.log(harshParams);
        return {
        access_token: decrypt(harshParams.access_token),
        refresh_token: decrypt(harshParams.refresh_token),
        success: true
    };
} else {
    return {
        success: false,
        access_token: '',
        refresh_token: ''
    }
}

}
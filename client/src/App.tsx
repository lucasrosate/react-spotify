import { useEffect } from "react";
import authApi from "@/api/spotifyAuthApi";
import { AxiosResponse } from "axios";


const { REACT_APP_CLIENT_ID, REACT_APP_BASE_URL } = process.env;




// const authorizeSpotify = () => {
//     authApi.get('/', ())
// }


const App: React.FC = () => {



    const loginAuth = () => {

    }

    return (
        <div className="w-full h-full bg-color">
            <div>
                <button className="spotify-btn" onClick={() => loginAuth()}>
                    LOG IN
                </button>
            </div>

        </div>
    );
}


export default App;
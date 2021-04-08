import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import axios from "axios";

import { getToken } from '@/redux/actions/action';
import { State } from '@/interfaces/StateInterface';

const App: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const dispatch = useDispatch();
    var state = useSelector((state: State) => state);

    const setNewToken = () => dispatch(getToken());


    return (
        <div className="w-full h-full bg-color">
            <input type="hidden" className="data" />
            <div>
                <a className="spotify-btn" href="http://localhost:3333/login" >
                    LOG IN
                </a>

                <button className="spotify-btn" onClick={ () => setNewToken()}  >
                    gettoken
                </button>
                {/* <div className="text-secondary-darker mt-5">
                    {security?.access_token}
                </div> */}

         

                <div className="text-secondary-darker mt-5">
                    {JSON.stringify(state)}      
                </div>

                {data && <img src={data?.images[0].url} alt="" />}
                
       





            </div>

        </div>
    );
}


export default App;
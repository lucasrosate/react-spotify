
import { useEffect } from 'react';
import { useFetchData, useInitializePlayer } from '@/hooks';
import style from '@/styles/page-styles/App.module.css';
import { useSelector } from 'react-redux';
import { State } from './interfaces/StateInterface';


const App: React.FC = () => {
    useFetchData();
    useInitializePlayer();

    const player = useSelector((state: State) => state.player);





    return (
        <>
            {
                player &&

                <div className={style.App}>
                    <div className={style.container}>
                        <div className={style.navbar}>

                        </div>

                        <div className={`text-secondary ${style.menu}`}>
                            {/* {userState.images[0].url && <img src={userState.images[0].url} alt="" />} */}

                            <div style={{
                                display: "block",
                                width: "900px",
                                wordWrap: "break-word"
                            }}>
                                {JSON.stringify(player)}
                            </div>


                            <div>
                                <a href="http://localhost:3333/login" className="btn-spotify btn-primary">Log in</a>
                            </div>


                        </div>
                    </div>


                    <div className={style.playerbar}>
                        <button className="btn-spotify btn-primary" onClick={() => player.togglePlay()}>Play/Pause</button>
                        <button className="btn-spotify btn-primary" onClick={() => player.nextTrack()}>Next</button>

                    </div>

                </div>
            }

        </>
    );
}


export default App;
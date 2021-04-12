
import { usePlayer, useUserState } from '@/hooks';
import style from '@/styles/page-styles/App.module.css';


const App: React.FC = () => {
    const userState = useUserState();
    const player = usePlayer();


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
                                {JSON.stringify(userState)}

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
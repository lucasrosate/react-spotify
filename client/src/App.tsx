import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFetchData, useInitializePlayer } from '@/hooks';
import NavigationBar from '@/components/NavigationBar';
import { State } from './interfaces/StateInterface';
import style from '@/styles/page-styles/App.module.css';
import PlayerBar from './components/PlayerBar';


const App: React.FC = () => {
    useFetchData();
    useInitializePlayer();

    const player = useSelector((state: State) => state.player);

    const isLoggedIn = useSelector((state: State) => state.user.isLoggedIn);

    return (
        <>
            {
                player &&

                <Router>
                    <div className={style.App}>
                        <div className={style.container}>

                            <div className={style.navbar}>
                                <NavigationBar />
                            </div>

                            <div className={`text-secondary ${style.menu}`}>
                                {/* {userState.images[0].url && <img src={userState.images[0].url} alt="" />} */}

                                <div style={{
                                    display: "block",
                                    width: "900px",
                                    wordWrap: "break-word"
                                }}>
                                    <Route exact path="/">
                                        <div className="text-white bg-gray-500 ">
                                        </div>
                                    </Route>

                                </div>


                                <div>
                                    {!isLoggedIn && <a href="http://localhost:3333/login" className="btn-spotify btn-primary">Log in</a>}
                                </div>


                            </div>
                        </div>


                        <div className={style.playerbar}>

                            <PlayerBar />
                        </div>

                    </div>
                </Router>

            }

        </>
    );
}


export default App;
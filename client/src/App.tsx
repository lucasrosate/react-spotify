
import useUserState from '@/hooks/useUserState';
import style from '@/styles/page-styles/App.module.css';

const App: React.FC = () => {

    const userState = useUserState();


    return (
        <div className={style.App}>
            <div className={style.container}>
                <div className={style.navbar}>

                </div>

                <div className={`text-secondary ${style.menu}`}>
                    {/* {userState.images[0].url && <img src={userState.images[0].url} alt="" />} */}

                    {JSON.stringify(userState)}

                  
                        <div>
                            <a href="http://localhost:3333/login" className="btn-spotify btn-primary">Log in</a>
                        </div>
         

                </div>
            </div>



            <div className={style.playerbar}>

            </div>

        </div>

    );
}


export default App;
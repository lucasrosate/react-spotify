import { State } from "@/interfaces/StateInterface";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import TrackInfo from './TrackInfo';
import TrackPanel from "./TrackPanel";

import { Container } from './style';

const PlayerBar: React.FC = () => {
    const player = useSelector((state: State) => state.player);
    const playerInfo = useSelector((state: State) => state.playerInfo);

    useEffect(() => {
       console.log(playerInfo)
    }, [playerInfo]);


    return (
        player && playerInfo &&
        <Container>

            <TrackInfo currentTrack={playerInfo?.track_window.current_track || null} />
            <TrackPanel player={player} playerInfo={playerInfo} />

        </Container>
    )
}



export default PlayerBar;
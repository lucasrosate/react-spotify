import React from "react";
import clsx from 'clsx';
import PlayButton from "./PlayButton";
import { IconContext } from 'react-icons';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { IPlayerInfo } from "@/interfaces";
import { Container } from './style';

interface Props {
    player: Spotify.SpotifyPlayer,
    playerInfo: IPlayerInfo
}

const BUTTON_SIZE = 40;
const INNER_BUTTON_SIZE = BUTTON_SIZE - 8;
const INNER_BUTTON_SIZE_2 = BUTTON_SIZE - 18;

const TrackPanel: React.FC<Props> = ({ player, playerInfo }: Props) => {

    return (
        <Container>
            <div onClick={() => player.previousTrack()}>
                <IconContext.Provider value={{ className: "change-music-button" }}>
                    <AiFillStepBackward
                        size={INNER_BUTTON_SIZE_2}
                    />
                </IconContext.Provider>
            </div>

            <PlayButton
                togglePlay={() => player.togglePlay()}
                paused={playerInfo.paused}
                buttonSize={BUTTON_SIZE}
                innerButtonSize={INNER_BUTTON_SIZE}
            />

            <div onClick={() => player.nextTrack()}>
                <IconContext.Provider value={{ className: "change-music-button" }}>
                    <AiFillStepForward
                        size={INNER_BUTTON_SIZE_2}
                    />
                </IconContext.Provider>
            </div>


        </Container >
    )
}

export default TrackPanel;
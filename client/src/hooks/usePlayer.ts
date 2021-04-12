import { useScript } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '@/interfaces/StateInterface';

const usePlayer = () => {
    const status = useScript("https://sdk.scdn.co/spotify-player.js");

    const [player, setPlayer] = useState<Spotify.SpotifyPlayer | null>(null);
    const access_token = useSelector((state: State) => state.auth.access_token);

    useEffect(() => {
        if (status === "ready" && access_token)
            window.onSpotifyWebPlaybackSDKReady = () => {

                const player = new Spotify.Player({
                    name: "React Spotify Player",
                    getOAuthToken: cb => { cb(access_token); }
                });

                // Error handling
                player.addListener('initialization_error', ({ message }) => { console.error(message); });
                player.addListener('authentication_error', ({ message }) => { console.error(message); });
                player.addListener('account_error', ({ message }) => { console.error(message); });
                player.addListener('playback_error', ({ message }) => { console.error(message); });

                // Playback status updates
                player.addListener('player_state_changed', state => { console.log(state); });

                // Ready
                player.addListener('ready', ({ device_id }) => {
                    console.log('Ready with Device ID', device_id);
                });

                // Not Ready
                player.addListener('not_ready', ({ device_id }) => {
                    console.log('Device ID has gone offline', device_id);
                });
                // Connect to the player!
                player.connect();

                setPlayer(player);
            }
    }, [status])

    return player;
}

export default usePlayer;
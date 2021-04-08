


class SpotifyManager {
    player!: Spotify.SpotifyPlayer;
    state!: Spotify.PlaybackState | null;

    
    constructor(token: string) {
        window.onSpotifyWebPlaybackSDKReady = () => {
            this.player = new Spotify.Player({
                name: "React Spotify",
                getOAuthToken: cb => { cb(token) }
            });

            if (this.player !== null) {
                // Adding a event listener to catch possibly errors
                this.player.addListener('authentication_error', ({ message }) => { console.error(message); });
                this.player.addListener('account_error', ({ message }) => { console.error(message); });
                this.player.addListener('playback_error', ({ message }) => { console.error(message); });

                // Catch player state changed (volume, play, pause)
                this.player.addListener('player_state_changed', async (state) => { 
                    this.state = await this.player.getCurrentState();

                });

                //
                this.player.addListener('ready', ({ device_id }) => {
                    // console.log('Ready with Device ID', device_id);
                    this.player?.seek(100);
                    this.player?.pause();
                });
                this.player.addListener('not_ready', ({ device_id }) => {
                    console.log('Device ID has gone offline', device_id);
                });

                // Connecting Spotify Client
                this.player.connect();
            } else {
                throw "Error during constructor";
            }

        }
    }

}

export default SpotifyManager;
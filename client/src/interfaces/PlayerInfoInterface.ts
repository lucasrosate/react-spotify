
export interface IArtist {
    name: string,
    uri: string,
}

export interface ITrack {
    id: string,
    uri: string,
    type: string,
    uid: string,
    linked_from: {
        uri: string | null,
        id: string | null
    },
    media_type: string,
    track_type: string,
    name: string,
    duration_ms: string,
    artists: Array<IArtist>,
    album: {
        uri: string,
        name: string,
        images: [{
            url: string,
            height: number,
            width: number
        }]
    },
    is_playable: boolean,
}

export interface IPlayerInfo {
    context: {
        uri: string,
        metadata: {
            context_description: string
        }
    },
    position: number,
    duration: number,
    paused: false,
    playback_quality: string,
    shuffle: boolean,
    repeat_mode: number,
    track_window: {
        current_track: ITrack,
        next_tracks: ITrack[],
        previous_tracks: ITrack[]
    },
    timestamp: number,
    restrictions: {
        disallow_resuming_reasons: string
    },
    disallows: {
        resuming: string
    }
};
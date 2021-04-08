export interface IAuth {
    access_token: string | null,
    refresh_token: string | null,
}

export interface IUser {
    username: string,
    profileImage: string,
    email: string
}

export type State = {
    auth: IAuth,
    user: IUser,
    player: Spotify.SpotifyPlayer | null,
    loading: boolean,
    error: string,
    codeError: number | null,
    
};

export type StateAction = {
    type: string,
    payload: any
}
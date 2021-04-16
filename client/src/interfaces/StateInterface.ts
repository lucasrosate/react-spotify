import { IErrorMessage } from './ErrorHandlingInterface';
import { IPlayerInfo } from './PlayerInfoInterface';

export interface IAuth {
    access_token: string | null,
    refresh_token: string | null,
}

interface IFollowersObject {
    href: string | null,
    total: number | null
}

interface I_ImageObject {
    height: number | null,
    width: number | null,
    url: string | null
}

interface IExternalUrl {
    spotify: string
}

export interface IUser {
    id: string | null,
    displayName: string,
    email: string,
    followers: IFollowersObject,
    profileImage: string,
    externalUrl: IExternalUrl,
    images: Array<I_ImageObject>,
    product: string,
    href: string,
    type: string,
    uri: string,
    isLoggedIn: boolean
}

export type State = {
    auth: IAuth,
    user: IUser,
    player: Spotify.SpotifyPlayer | null,
    playerInfo: IPlayerInfo | null,
    loading: boolean,
    error: IErrorMessage,

};

export type StateAction = {
    type: string,
    payload: any
}
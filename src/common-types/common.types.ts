export enum IconSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

// export interface CommonResponseType<T> {
//     status: number, //TODO
//     message: string;
//     data: T
// }

export interface CommonResponseType<T> {
    checkoutUrl?: string;
    message(message: string): string;
    errorMessage?:string;
    status: number, 
    data: T
}
export interface Dictionary<V> {
    [K:string]: V;
}


export enum HeaderActionType {
    BACK = 'back',
    CHANGE_LANGUAGE = 'change_language'
}

export enum FooterActionType {
    TOGGLE_DETAILS_WIDGET = 'TOGGLE_DETAILS_WIDGET',
    PROCEED = 'PROCEED'
}

export interface Theme {
    themeColor?: string;
}

export interface loginData {
    username:string;
    Password:string;
}



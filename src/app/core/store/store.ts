export interface State {
    categories: string[];
    error: IError;
}

export interface IError {
    code: string;
    message: string;
}
import { createAction, props } from "@ngrx/store";
import { IError } from "../store";

export interface IPayload {
    payload: IError
}

export const setError = createAction('[Error Component] Set error info', props<IPayload>());
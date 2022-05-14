import { Action, createReducer, on } from "@ngrx/store";
import { setError } from "../actions/error.actions";
import { IError } from "../store";

export const initialState: IError = undefined;

const _errorReducer = createReducer(
  initialState,
  on(setError, (state, {payload}) => payload)
);

export function errorReducer(state: IError, action: Action): IError {
    return _errorReducer(state, action)
}
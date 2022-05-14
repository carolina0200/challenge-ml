import { createSelector } from "@ngrx/store";
import { IError, State } from "../store";

export const error = (state: State) => state.error;

export const getError = createSelector(
  error,
  (state: IError) => state
);
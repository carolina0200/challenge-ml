import { Action, createReducer, on } from "@ngrx/store";
import { updateCategories } from "../actions/categories.actions";

export const initialState: string[] = [];

const _categoriesReducer = createReducer(
  initialState,
  on(updateCategories, (state, {payload}) => payload)
);

export function categoriesReducer(state: string[], action: Action): string[] {
    return _categoriesReducer(state, action)
}
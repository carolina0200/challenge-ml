import { createSelector } from "@ngrx/store";
import { State } from "../store";

export const categories = (state: State) => state.categories;

export const selectCategories = createSelector(
  categories,
  (state: string[]) => state
);
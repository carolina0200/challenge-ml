import { createAction, props } from "@ngrx/store";

export interface IPayload {
    payload: string[]
}

export const updateCategories = createAction('[Breadcrumb Component] Update Categories', props<IPayload>());
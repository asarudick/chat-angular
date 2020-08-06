import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[User] Login',
  props<{ name: string, password: string }>()
);

export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ data: any }>()
);

export const loginFailure = createAction(
  '[User] Login Failure',
  props<{ error: any }>()
);

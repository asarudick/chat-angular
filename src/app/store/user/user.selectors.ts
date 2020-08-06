import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/types/User';
import * as fromUser from './user.reducer';

export const getUserState = createFeatureSelector<User>(
  fromUser.featureKey
);

export const getUser = createSelector(getUserState, (u: User) => u);

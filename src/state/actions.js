import { createAction } from 'redux-actions';
import TYPE from './action-types';

export const getDrinksSuccess = createAction(
    TYPE.GET_DRINKS_SUCCESS,
    (response) => response,
);
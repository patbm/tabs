import { createSelector } from 'reselect';

export const getAllDrinks = createSelector(
    (state) => state && state.drinks,
    drinks => drinks
);
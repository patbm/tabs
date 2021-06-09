import * as Actions from './actions';

export const getDrinks = () => {
    return dispatch => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=10')
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            throw(res.error);
        }
        dispatch(Actions.getDrinksSuccess(res));
        return res;
    })
}}

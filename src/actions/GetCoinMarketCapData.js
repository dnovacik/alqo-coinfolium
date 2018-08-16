import axios from 'axios';
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from './../utils/ActionTypes';

export default async function GetCoinMarketCapData(currency) {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`/api/getcmcdata?currency=${currency}`)
        .then(res => {
            dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
        })
    }
}
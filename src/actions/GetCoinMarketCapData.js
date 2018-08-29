import axios from 'axios';
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from './../utils/ActionTypes';

export default async function GetCoinMarketCapData(currency) {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`/api/getcmcdata?currency=${currency}`)
        .then(res => {
            if (res.data.status.error_code === 0) {
                dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
            } else {
                dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: res })
            }
        })
        .catch(err => {
            dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err })
        })
    }
}
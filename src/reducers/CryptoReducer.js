import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from './../utils/ActionTypes';

const initialState = {
    isFetching: false,
    response: {
        data: []
    },
    hasError: false,
    errorMessage: null,
    lastFetch: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                response: { data: [] },
                hasError: false,
                errorMessage: null
            });

        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                response: { data: action.payload.data },
                hasError: false,
                errorMessage: null,
                lastFetch: Date.now()
            });

        case FETCHING_COIN_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                response: { data: [] },
                hasError: true,
                errorMessage: action.payload.data.status.error_message
            });
        default:
            return state;
    }
}
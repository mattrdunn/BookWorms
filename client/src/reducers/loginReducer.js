import { SEND_LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/loginActions';

const initialState = {
    loading: false
}
export const loginReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case SEND_LOGIN_REQUEST: {
        return {
            ...state,
            loading: true
        }
    }
    case LOGIN_SUCCESS: 
    case LOGIN_FAILURE: 
    default:
        return state;
    }
}
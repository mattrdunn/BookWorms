export const SEND_LOGIN_REQUEST = 'SEND_LOGIN_REQUEST';
export const login = () => ({
    type: SEND_LOGIN_REQUEST
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: { error }
});

export const SEND_SIGNUP_REQUEST = 'SEND_SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
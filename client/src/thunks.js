import { login, loginSuccess, loginFailure } from './actions/loginActions';

export const sendLoginRequest = (email, pw) => async (dispatch) => {
    try {
        dispatch(login);
        /* 
         * make request with email/pw
         */
        dispatch(loginSuccess);
    } catch (error) {
        dispatch(loginFailure(error));
    }
}
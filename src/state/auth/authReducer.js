import { types } from './authActions';

export const authState = {
    loadingUser: false,
    currentUser: {
        accountId: 'test-account',
    },
    errorMessage: null,
};

export default function reducer(state, action) {
    let { payload } = action;
    console.log('Dispatched Action', action);
    switch (action.type) {
        case types.AUTH_START:
            return {
                ...state,
                loadingUser: true,
            };
        case types.AUTH_SUCCESS:
            return {
                ...state,
                loadingUser: false,
                currentUser: payload,
            };
        case types.AUTH_ERROR:
            return {
                ...state,
                loadingUser: false,
                errorMessage: payload || null,
                currentUser: null,
            };
        case types.AUTH_LOGOUT:
            return {
                ...state,
                currentUser: null,
            };
        case types.CREATE_COMPANY:
            return {
                ...state,
                company: payload,
            };
        default:
            return {
                ...state,
            };
    }
}

import * as actionTypes from "../actions/actionTypes";

const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case actionTypes.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload.user],
            };

        case actionTypes.UPDATE_USER:
            const updatedUsers = state.users.map((user) =>
                user.id === action.payload.user.id ? action.payload.user : user
            );
            return {
                ...state,
                users: updatedUsers,
            };

        case actionTypes.DELETE_USER:
            const filteredUsers = state.users.filter(
                (user) => user.id !== action.payload.userId
            );
            return {
                ...state,
                users: filteredUsers,
            };

        default:
            return state;
    }
};

export default userReducer;

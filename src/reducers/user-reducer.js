import { UPDATE_USER, SHOW_ERROR } from "../actions/userActions";

export default function userReducer(state = '', action) {
    switch (action.type) {
        case UPDATE_USER:
            return action.payload.user;
        case UPDATE_USER:
            return action.payload.user;
        default:
            return state;
    }
} 
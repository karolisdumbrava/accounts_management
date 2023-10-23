import { combineReducers } from "redux";
import userReducer from "./userReducer";
import companiesReducer from "./companiesReducer";

const rootReducer = combineReducers({
    companies: companiesReducer,
    users: userReducer,
});

export default rootReducer;

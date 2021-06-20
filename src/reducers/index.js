import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer
})

export default rootReducer;
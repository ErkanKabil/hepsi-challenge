import { combineReducers } from "redux";

import pollReducer from "./pollReducer";

const rootReducer = combineReducers({
	polls: pollReducer,
});

export default rootReducer;

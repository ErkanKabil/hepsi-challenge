import { createLogger } from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../reducers/rootReducer";

export const middlewares = [];
middlewares.push(thunk);

const logger = createLogger({
	collapsed: true,
});
middlewares.push(logger);

const makeConfiguredStore = (reducer, initialState) => createStore(reducer, initialState, applyMiddleware(...middlewares));

export const makeStore = (initialState) => {
	const isServer = typeof window === "undefined";

	if (isServer) {
		// eslint-disable-next-line no-param-reassign
		initialState = initialState || { fromServer: "" };
		return makeConfiguredStore(rootReducer, initialState);
	}

	// eslint-disable-next-line global-require
	const { persistStore, persistReducer } = require("redux-persist");
	// eslint-disable-next-line global-require
	const storage = require("redux-persist/lib/storage").default;

	const persistConfig = {
		key: "hepsiburada_0.0.1",
		storage,
		timeout: 0,
	};

	const persistedReducer = persistReducer(persistConfig, rootReducer);
	const store = makeConfiguredStore(persistedReducer, initialState);

	store.__persistor = persistStore(store); // Nasty hack

	return store;
};

const wrapper = createWrapper(makeStore);

export default wrapper;

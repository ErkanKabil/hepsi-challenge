import {
	ADD_POLL, DECREASE_POINT, INCREASE_POINT, REMOVE_POLL,
} from "../actions/actionTypes";

const initialState = {
	polls: [],
};

const pollReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_POLL:
			return {
				...state,
				polls: [...state.polls, payload],
			};
		case REMOVE_POLL:
			return {
				...state,
				polls: state?.polls?.filter((item) => item?.id !== payload),
			};
		case INCREASE_POINT:
			return {
				...state,
				polls: state?.polls?.map((item) =>
					(item?.id === payload ? { ...item, point: item?.point + 1, lastUpdate: new Date().getTime() } : item)),
			};
		case DECREASE_POINT:
			return {
				...state,
				polls: state?.polls?.map((item) =>
					(item?.id === payload ? { ...item, point: item?.point - 1, lastUpdate: new Date().getTime() } : item)),
			};
		default:
			return state;
	}
};

export default pollReducer;

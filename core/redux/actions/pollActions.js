import {ADD_POLL, DECREASE_POINT, INCREASE_POINT, REMOVE_POLL} from "./actionTypes";

export const addPoll = (payload) => ({
	type: ADD_POLL,
	payload:payload
});

export const removePoll = (id) => ({
	type: REMOVE_POLL,
	payload:id
});

export const increasePoint = (id) => ({
	type: INCREASE_POINT,
	payload:id
});

export const decreasePoint = (id) => ({
	type: DECREASE_POINT,
	payload:id
});

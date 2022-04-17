import { makeStore } from "../redux/store";
import { pollsMockData1, pollsMockData2, pollsMockData3 } from "./mocks/pollsData";
import {
	addPoll, decreasePoint, increasePoint, removePoll,
} from "../redux/actions/pollActions";

const store = makeStore();

describe("Polls", () => {
	it("should create an poll", () => {
		store.dispatch(addPoll(pollsMockData1));
		store.dispatch(addPoll(pollsMockData2));
		store.dispatch(addPoll(pollsMockData3));

		expect(store.getState().polls.polls).toEqual([pollsMockData1, pollsMockData2, pollsMockData3]);
	});

	it("should increase the point of the vote ", () => {
		store.dispatch(increasePoint(pollsMockData1.id));

		const storedItem = store.getState().polls.polls.find((item) => item.id === pollsMockData1.id);

		expect(storedItem?.point).toEqual(pollsMockData1.point + 1);
	});

	it("should decrease the point of the vote ", () => {
		store.dispatch(decreasePoint(pollsMockData2.id));

		const storedItem = store.getState().polls.polls.find((item) => item.id === pollsMockData2.id);


		expect(storedItem?.point).toEqual(pollsMockData2.point - 1);
	});

	it("should remove the poll ", () => {
		store.dispatch(removePoll(pollsMockData3.id));

		expect(store.getState().polls.polls).not.toContain(pollsMockData3);
	});
});

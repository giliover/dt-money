import transactionsReducer from "reducers/transactions";
import { ADD_TRANSACTION } from "actions/types";

it("handles actions of type ADD_TRANSACTION", () => {
	const action: TransactionProperties = {
		type: ADD_TRANSACTION,
		payload: {
			id: 1,
			title: "WebSite",
			value: 5000,
			category: "work",
			type: "deposit",
			createdAt: new Date(),
		},
	};

	const newState = transactionsReducer([], action);

	expect(newState).toEqual([action.payload]);
});

it("handles actions of unknown type", () => {
	const newState = transactionsReducer([], { type: "ASFDGADSNSFG" });

	expect(newState).toEqual([]);
});

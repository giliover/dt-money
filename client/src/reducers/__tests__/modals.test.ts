import modalsReducer from "reducers/modals";
import { SHOW_TRANSACTION_MODAL, HIDE_TRANSACTION_MODAL } from "actions/types";
import { initialState } from "reducers/modals";

it("handles actions of type SHOW_TRANSACTION_MODAL", () => {
	const action: TransactionProperties = {
		type: SHOW_TRANSACTION_MODAL,
	};

	const newState = modalsReducer([], action);

	expect(newState).toEqual({
		...initialState,
		isNewTransactionModalOpen: true,
	});
});

it("handles actions of type HIDE_TRANSACTION_MODAL", () => {
	const action: TransactionProperties = {
		type: HIDE_TRANSACTION_MODAL,
	};

	const newState = modalsReducer([], action);

	expect(newState).toEqual({
		...initialState,
		isNewTransactionModalOpen: false,
	});
});

it("handles actions of unknown type", () => {
	const newState = modalsReducer([], { type: "ASFDGADSNSFG" });

	expect(newState).toEqual([]);
});

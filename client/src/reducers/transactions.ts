import * as actionTypes from "actions/types";

const initialState: TransactionsState = [];

const transactions = (
	state: TransactionsState = initialState,
	action: TransactionAction
): TransactionsState => {
	switch (action.type) {
		case actionTypes.ADD_TRANSACTION:
			const { id, title, value, category, type, createdAt } =
				action.payload;
			const newTransaction: TransactionProperties = {
				id,
				title,
				value,
				category,
				type,
				createdAt,
			};
			return [...state, newTransaction];

		case actionTypes.REMOVE_TRANSACTION:
			const updatedTransactions: TransactionProperties[] = state.filter(
				(payload) => payload.id !== action.payload.id
			);

			return [...state, ...updatedTransactions];
	}

	return state;
};

export default transactions;

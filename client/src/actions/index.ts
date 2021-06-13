import * as actionTypes from "actions/types";

// TRANSACTIONS
function addTransaction(payload: TransactionProperties) {
	const action: TransactionAction = {
		type: actionTypes.ADD_TRANSACTION,
		payload,
	};
	return action;
}

function removeTransaction(payload: TransactionProperties) {
	const action: TransactionAction = {
		type: actionTypes.REMOVE_TRANSACTION,
		payload,
	};
	return action;
}

// NEW TRANSACTION MODAL
function openNewTransactionModal(
	payload: NewTransactionModalProperties = true
) {
	const action: NewTransactionModalAction = {
		type: actionTypes.SHOW_TRANSACTION_MODAL,
		payload,
	};
	return action;
}

function closeNewTransactionModal(
	payload: NewTransactionModalProperties = false
) {
	const action: NewTransactionModalAction = {
		type: actionTypes.HIDE_TRANSACTION_MODAL,
		payload,
	};
	return action;
}
export {
	addTransaction,
	removeTransaction,
	openNewTransactionModal,
	closeNewTransactionModal,
};

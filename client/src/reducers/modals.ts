import * as actionTypes from "actions/types";

const initialState: ModalsState = {
	isNewTransactionModalOpen: false,
};

function modals(
	state = initialState,
	action: NewTransactionModalAction
): ModalsState {
	switch (action.type) {
		case actionTypes.SHOW_TRANSACTION_MODAL:
			return {
				...state,
				isNewTransactionModalOpen: true,
			};
		case actionTypes.HIDE_TRANSACTION_MODAL:
			return {
				...state,
				isNewTransactionModalOpen: false,
			};
		default:
			return state;
	}
}

export default modals;

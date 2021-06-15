import { combineReducers } from "redux";
import transactionsRecucer from "reducers/transactions";
import modalsReducer from "reducers/modals";

export default combineReducers({
	transactions: transactionsRecucer,
	modals: modalsReducer,
});

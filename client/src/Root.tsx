import React, { ReactNode } from "react";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

const store: Store<TransactionsState, TransactionAction> & {
	dispatch: DispatchType;
} = createStore(reducer, {});

type PropsWithChildren = { children: ReactNode };

function Root(props: PropsWithChildren) {
	return <Provider store={store}>{props.children}</Provider>;
}

export default Root;

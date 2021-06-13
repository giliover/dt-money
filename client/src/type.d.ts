interface TransactionProperties {
	id: string;
	title: string;
	value: number;
	category: string;
	type: string;
	createdAt: Date;
}

type TransactionsState = TransactionProperties[];

type ModalsState = {
	isNewTransactionModalOpen: boolean;
};

type TransactionAction = {
	type: string;
	payload: TransactionProperties;
};

type NewTransactionModalProperties = boolean;

type NewTransactionModalAction = {
	type: string;
	payload: NewTransactionModalProperties;
};

type StoreState = {
	transactions: TransactionsState;
	modals: ModalsState;
};

type DispatchType = (args: TransactionAction) => TransactionAction;

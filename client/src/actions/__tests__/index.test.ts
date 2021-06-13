import {
	addTransaction,
	removeTransaction,
	closeNewTransactionModal,
	openNewTransactionModal,
} from "actions";
import {
	ADD_TRANSACTION,
	REMOVE_TRANSACTION,
	HIDE_TRANSACTION_MODAL,
	SHOW_TRANSACTION_MODAL,
} from "actions/types";

describe("addTransaction", () => {
	it(`has a correct type`, () => {
		const action = addTransaction();

		function callback(action) {
			try {
				expect(action.type).toEqual(ADD_TRANSACTION);
				done();
			} catch (error) {
				done(error);
			}
		}
	});

	it("has a correct paylad ", () => {
		const payload = {
			id: 1,
			title: "WebSite",
			amount: 5000,
			category: "work",
			type: "deposit",
			createdAt: new Date(),
		};

		const action = addTransaction(payload);

		function callback(action) {
			try {
				expect(action.payload).toEqual(payload);
				done();
			} catch (error) {
				done(error);
			}
		}
	});
});

describe("removeTransaction", () => {
	it(`has a correct type`, () => {
		const action = removeTransaction();

		function callback(action) {
			try {
				expect(action.type).toEqual(REMOVE_TRANSACTION);
				done();
			} catch (error) {
				done(error);
			}
		}
	});

	it("has a correct paylad ", () => {
		const payload = {
			id: 1,
			title: "WebSite",
			amount: 5000,
			category: "work",
			type: "deposit",
			createdAt: new Date(),
		};

		const action = removeTransaction(payload);

		function callback(action) {
			try {
				expect(action.payload).toEqual(payload);
				done();
			} catch (error) {
				done(error);
			}
		}
	});
});

describe("closeNewTransactionModal", () => {
	it(`has a correct type`, () => {
		const action = closeNewTransactionModal();

		function callback(action) {
			try {
				expect(action.type).toEqual(HIDE_TRANSACTION_MODAL);
				done();
			} catch (error) {
				done(error);
			}
		}
	});

	it("has a correct paylad ", () => {
		const payload = {
			id: 1,
			title: "WebSite",
			amount: 5000,
			category: "work",
			type: "deposit",
			createdAt: new Date(),
		};

		const action = closeNewTransactionModal(payload);

		function callback(action) {
			try {
				expect(action.payload).toEqual(payload);
				done();
			} catch (error) {
				done(error);
			}
		}
	});
});

describe("openNewTransactionModal", () => {
	it(`has a correct type`, () => {
		const action = openNewTransactionModal();

		function callback(action) {
			try {
				expect(action.type).toEqual(SHOW_TRANSACTION_MODAL);
				done();
			} catch (error) {
				done(error);
			}
		}
	});

	it("has a correct paylad ", () => {
		const payload = {
			id: 1,
			title: "WebSite",
			amount: 5000,
			category: "work",
			type: "deposit",
			createdAt: new Date(),
		};

		const action = openNewTransactionModal(payload);

		function callback(action) {
			try {
				expect(action.payload).toEqual(payload);
				done();
			} catch (error) {
				done(error);
			}
		}
	});
});

import React, { useRef, useState, useCallback } from "react";
import { uuid } from "uuidv4";
import useModals from "hooks/useModals";
import useTransactions from "hooks/useTransactions";
import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";
import Modal from "react-modal";

import {
	Container,
	TransactionTypeContainer,
	RadioBox,
} from "styles/newTransactionModal";

import closeImg from "assets/close.svg";

Modal.setAppElement("#root");

function NewTransactionsModal() {
	const formRef = useRef<HTMLFormElement>(null);
	const [category, setCategory] = useState("");
	const [title, setTitle] = useState("");
	const [value, setValue] = useState(0);
	const [type, setType] = useState("deposit");
	const { addTransaction } = useTransactions();
	const {
		isNewTransactionModalOpen: isOpen,
		closeNewTransactionModal: onRequestClose,
	} = useModals();

	const handleSubmit = useCallback(
		async (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			try {
				const data = {
					id: uuid(),
					category,
					value,
					title,
					type,
					createdAt: new Date(),
				};
				await addTransaction(data);

				setCategory("");
				setValue(0);
				setTitle("");

				onRequestClose();
			} catch (error) {
				console.log("Could not add transaction in API");
			}
		},
		[onRequestClose, addTransaction, value, title, category]
	);

	return (
		<Modal
			className="modal-content"
			overlayClassName="modal-overlay"
			isOpen={isOpen}
			onRequestClose={(e) => onRequestClose()}
		>
			<Container ref={formRef} onSubmit={handleSubmit}>
				<h2>New Transaction</h2>

				<button className="modal-close" onClick={onRequestClose}>
					<img src={closeImg} alt="close" />
				</button>

				<input
					onChange={(event) => setTitle(event.target.value)}
					type="text"
					placeholder="title"
				/>

				<input
					onChange={(event) => setValue(Number(event.target.value))}
					type="number"
					placeholder="value"
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						isActive={type === "deposit"}
						onClick={() => setType("deposit")}
					>
						<img src={incomeImg} alt="input" />
						<span>Input</span>
					</RadioBox>

					<RadioBox
						type="button"
						isActive={type === "withdraw"}
						onClick={() => setType("withdraw")}
					>
						<img src={outcomeImg} alt="output" />
						<span>Output</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					onChange={(event) => setCategory(event.target.value)}
					type="text"
					placeholder="category"
				/>
				<button type="submit">Confirm</button>
			</Container>
		</Modal>
	);
}

export default NewTransactionsModal;

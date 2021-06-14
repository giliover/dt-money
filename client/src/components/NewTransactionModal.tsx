import React, { useRef, useState, useCallback } from "react";
import { uuid } from "uuidv4";
import useModals from "hooks/useModals";
import useTransactions from "hooks/useTransactions";
import Modal from "react-modal";

import { Container } from "styles/newTransactionModal";

import closeImg from "assets/close.svg";

Modal.setAppElement("#root");

function NewTransactionsModal() {
	const formRef = useRef<HTMLFormElement>(null);
	const [category, setCategory] = useState("");
	const [title, setTitle] = useState("");
	const [value, setValue] = useState(0);
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
					type: "withdraw",
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
					onChange={(event) => setCategory(event.target.value)}
					type="text"
					placeholder="category"
				/>
				<input
					onChange={(event) => setValue(Number(event.target.value))}
					type="number"
					placeholder="value"
				/>
				<input
					onChange={(event) => setTitle(event.target.value)}
					type="text"
					placeholder="title"
				/>
				<button type="submit">Confirm</button>
			</Container>
		</Modal>
	);
}

export default NewTransactionsModal;

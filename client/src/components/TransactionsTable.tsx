import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { formatValue } from "utils/formatValue";

import { Container } from "styles/transactionsTable";

function TransactionsTable() {
	const transactions = useSelector((state: StoreState) => {
		return state.transactions;
	}, shallowEqual);
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Value</th>
						<th>Category</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.id}>
							<td>{transaction.title}</td>
							<td className={transaction.type}>
								{formatValue(transaction.value)}
							</td>
							<td>{transaction.category}</td>
							<td>{transaction.createdAt}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}

export default TransactionsTable;

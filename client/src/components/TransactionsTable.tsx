import React from "react";
import { Container } from "styles/transactionsTable";
import { api } from "services/api";

function TransactionsTable() {
	api.get("transactions").then((response) => {
		console.log(response.data);
	});

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
					<tr>
						<td>WebSite</td>
						<td className="deposit">R$: 5.000,00</td>
						<td>work</td>
						<td>03/06/2021</td>
					</tr>
					<tr>
						<td>Sound Box</td>
						<td className="withdraw">- R$: 300,00</td>
						<td>leisure</td>
						<td>04/06/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}

export default TransactionsTable;

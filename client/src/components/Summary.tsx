import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Container } from "styles/summary";
import { formatValue } from "utils/formatValue";

import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";
import totalImg from "assets/total.svg";

function Summary() {
	const transactions = useSelector((state: StoreState) => {
		return state.transactions;
	}, shallowEqual);

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === "deposit") {
				acc.deposits += transaction.value;
				acc.total += transaction.value;
			} else {
				acc.withdraws += transaction.value;
				acc.total -= transaction.value;
			}
			return acc;
		},
		{
			withdraws: 0,
			deposits: 0,
			total: 0,
		}
	);

	return (
		<Container>
			<div>
				<header>
					<p>Inputs</p>
					<img src={incomeImg} alt="inputs" />
				</header>
				<strong>{formatValue(summary.deposits)}</strong>
			</div>
			<div>
				<header>
					<p>Outputs</p>
					<img src={outcomeImg} alt="outputs" />
				</header>
				<strong>{formatValue(summary.withdraws)}</strong>
			</div>
			<div className="highlight-background">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="total" />
				</header>
				<strong>{formatValue(summary.total)}</strong>
			</div>
		</Container>
	);
}

export default Summary;

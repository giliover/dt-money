import React from "react";
import { Container } from "styles/summary";
import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";
import totalImg from "assets/total.svg";

function Summary() {
	return (
		<Container>
			<div>
				<header>
					<p>Inputs</p>
					<img src={incomeImg} alt="inputs" />
				</header>
				<strong>R$: 5.000,00</strong>
			</div>
			<div>
				<header>
					<p>Outputs</p>
					<img src={outcomeImg} alt="outputs" />
				</header>
				<strong>- R$: 300,00</strong>
			</div>
			<div className="highlight-background">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="total" />
				</header>
				<strong>R$: 4.700,00</strong>
			</div>
		</Container>
	);
}

export default Summary;

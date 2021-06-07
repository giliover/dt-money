import React from "react";
import { Container } from "styles/dashboard";
import Summary from "components/Summary";
import TransactionsTable from "components/TransactionsTable";

function Dashboard() {
	return (
		<Container>
			<Summary />
			<TransactionsTable />
		</Container>
	);
}

export default Dashboard;

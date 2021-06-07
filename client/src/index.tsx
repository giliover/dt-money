import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer } from "miragejs";

createServer({
	routes() {
		this.namespace = "api";

		this.get("transactions", () => {
			return [
				{
					id: 1,
					title: "WebSite",
					amount: 5000,
					category: "work",
					type: "deposit",
					createdAt: new Date(),
				},
			];
		});
	},
});

ReactDOM.render(<App />, document.getElementById("root"));

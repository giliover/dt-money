import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import Root from "Root";
import { createServer, Model } from "miragejs";

createServer({
	models: {
		transaction: Model,
	},
	routes() {
		this.namespace = "api";
		this.get("/transactions", () => {
			return this.schema.all("transaction");
		});
		this.post("/transactions", (schema, request) => {
			let data = JSON.parse(request.requestBody);

			return schema.create("transaction", data);
		});
	},
});

ReactDOM.render(
	<Root>
		<App />
	</Root>,
	document.getElementById("root")
);

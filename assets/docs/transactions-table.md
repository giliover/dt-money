<label><strong>💻 Code: </strong></label>

```jsx
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

```

```jsx
export const Container = styled.div` 

margin-top:4rem;

table {
	width: 100%;
	border-spacing: 0 0.5rem;
}

th {
	color: var(--text-body);
	font-weight: 400;
	padding: 1rem 2rem;
	text-align: left;
	line-height: 1.5rem;
}

td {
	padding: 1rem 2rem;
	border: 0;
	background: var(--shape);
	color: var(--text-body);
	border-radius: 0.25%;

	&:first-child {
		color: var(--text-title);
	}

}

.deposit {
	color: var(--green);
}

.withdraw {
	color: var(--red);
}

`;
```

<br>
<br>
<label><strong>Before: </strong></label>
<img width="100%"alt="dt-money.transactionsTable.01 Style"src="../images/dt-money.transactionsTable.01.png">
<br>
<br>

<label>✔ - The <strong>TransactionsTable</strong> container was exported with some css styles.</label>
<br>
<label>↪ Going down <strong>Summary</strong> Container with <strong>margin-top</strong> property </label>

```css
margin-top:4rem;
```
<br>
<br>
<label><strong>Result: </strong></label>
<img width="100%"alt="dt-money.transactionsTable.02 Style"src="../images/dt-money.transactionsTable.02.png">
<br>
<br>

<label>↪ Adjusting <strong>width</strong> size and <strong>border-spacing</strong> </label>

```css
width:100%;
border-spacing: 0 0.5rem;

```

<br>
<br>
<label><strong>Result:</strong></label>
<img width="100%"alt="dt-money.transactionsTable.03 Style"src="../images/dt-money.transactionsTable.03.png">
<br>
<br>

<label>↪ styling <strong>th</strong> of the table </label>

```css
th {
	color: var(--text-body);
	font-weight: 400;
	padding: 1rem 2rem;
	text-align: left;
	line-height: 1.5rem;
}

```

<br>
<br>
<label><strong>Result:</strong></label>
<img width="100%"alt="dt-money.transactionsTable.03 Style"src="../images/dt-money.transactionsTable.03.png">
<br>
<br>

<label>↪ styling <strong>td</strong> of the table </label>

```css
td {
	padding: 1rem 2rem;
	// 16px -> top, down 32px -> left, right
	border: 0;
	background: var(--shape);
	color: var(--text-body);
	border-radius: 0.25%;

	&:first-child {
		color: var(--text-title);
	}

}

```

<br>
<br>
<label><strong>Result:</strong></label>
<img width="100%"alt="dt-money.transactionsTable.04 Style"src="../images/dt-money.transactionsTable.04.png">
<br>
<br>

<label>↪ Applying color to the specific numbers  </label>

```css

.deposit {
	color: var(--green);
}

.withdraw {
	color: var(--red);
}

```

<br>
<br>
<label><strong>Result:</strong></label>
<img width="100%"alt="dt-money.transactionsTable.05 Style"src="../images/dt-money.transactionsTable.05.png">
<br>
<br>
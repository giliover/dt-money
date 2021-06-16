<label><strong>💻 Code: </strong></label>

```jsx
	<Container>
		<Content>
			<img src={logo} alt="dt money" />
			<button onClick={openModal} type="button">
				New transition
			</button>
		</Content>
	</Container>
```jsx

export const Container = styled.header`
	background: var(--blue);
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1080px;
	margin: 0 auto;
	padding: 2rem 1rem 10rem;

	button {
		border: 0;
		padding: 0 2rem;
		font-size: 1rem;
		color: var(--shape);
		background: var(--blue-light);
		border-radius: 0.25%;
		height: 3rem;
		transition: filter 0.15s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;
```

<br>
<br>
<label>✔ was exported the header container with blue background.</label>

```css
background: var(--blue);
```

<br>
<br>
<label><strong>Result: </strong></label>
<img alt="dt-money.header.01 Style"src="../images/dt-money.header.01.png">
<br>
<br>

<label>✔ was exported the content container</label>
<br>
<label>↪ Using the flex property of the css to center and define the space between elements </label>

```css
display: flex;
align-items: center;
justify-content: space-between;
```

<br>
<br>
<label><strong>Result: </strong></label>
<img alt="dt-money.header.02 Style"src="../images/dt-money.header.02.png">
<br>
<br>

<label>↪ Defining padding, margin and width max </label>

```css
max-width: 1080px;
margin: 0 auto;
padding: 2rem 1rem 10rem;
```

<br>
<br>
<label><strong>Result:</strong></label>
<img alt="dt-money.header.03 Style"src="../images/dt-money.header.03.png">
<br>
<br>

<label>↪ Defining the Basic Style on the Button </label>

```css
button {
	border: 0;
	padding: 0 2rem;
	font-size: 1rem;
	color: var(--shape);
	background: var(--blue-light);
	border-radius: 0.25%;
	height: 3rem;
}
```

<br>
<br>
<label><strong>Result: </strong></label>
<img alt="dt-money.header.04 Style"src="../images/dt-money.header.04.png">
<br>
<br>

<label>↪ Defining the hover and transition on the Button </label>

```css
transition: filter 0.15s;

&:hover {
	filter: brightness(0.9);
}
```

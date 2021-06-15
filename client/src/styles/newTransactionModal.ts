import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
	h2 {
		color: var(--text-tittle);
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		border-radius: 0.25rem;
		border: 1px solid var(--border-input);
		background: var(--background-input);

		&::placeholder {
			color: var(--text-body);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type="submit"] {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		background: var(--green);
		color: var(--shape);
		border-radius: 0.25rem;
		border: 0;
		font-size: 1rem;
		margin-top: 1.5rem;
		font-weight: 600;
		transition: 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const TransactionTypeContainer = styled.div`
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
`;

interface RadioBoxProperties {
	isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProperties>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 4rem;
	background: ${(props) => (props.isActive ? "#eee" : "transparent")};
	border-radius: 0.25rem;
	border: 1px solid var(--border-input);

	transition: 0.2s;

	&:hover {
		border-color: ${darken(0.1, "#d7d7d7")};
	}

	img {
		width: 20px;
		height: 20px;
	}

	span {
		display: inline-block;
		margin-left: 1rem;
		font-size: 1rem;
		color: var(--input-text);
	}
`;

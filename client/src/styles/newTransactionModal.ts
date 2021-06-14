import styled from "styled-components";

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

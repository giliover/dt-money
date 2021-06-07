import styled from "styled-components";

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

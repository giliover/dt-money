import React from "react";
import { Container, Content } from "styles/header";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { openNewTransactionModal } from "actions";
import logo from "assets/logo.svg";

function Header() {
	const dispatch: Dispatch<any> = useDispatch();

	const openModal = React.useCallback(
		() => dispatch(openNewTransactionModal()),
		[dispatch]
	);
	return (
		<Container>
			<Content>
				<img src={logo} alt="dt money" />
				<button onClick={openModal} type="button">
					New transition
				</button>
			</Content>
		</Container>
	);
}

export default Header;

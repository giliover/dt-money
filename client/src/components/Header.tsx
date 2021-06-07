import React from "react";
import { Container, Content } from "styles/header";
import logo from "assets/logo.svg";

function Header() {
	return (
		<Container>
			<Content>
				<img src={logo} alt="dt money" />
				<button type="button">New transition</button>
			</Content>
		</Container>
	);
}

export default Header;

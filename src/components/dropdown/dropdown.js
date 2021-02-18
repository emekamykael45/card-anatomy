import React from "react";

import { ReactComponent as MenuIcon } from "../../assets/svg/menu.svg";

import "./dropdown.scss";

const DropDown = ({ children }) => (
	<div className="dropdown_container">
		<button
			className="dropdown_toggle"
			id="dropdown01"
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
		>
			<div className="toggle_div">
				<MenuIcon />
			</div>
		</button>
		<div className="dropdown-menu" aria-labelledby="dropdown01">
			{children}
		</div>
	</div>
);

export default DropDown;

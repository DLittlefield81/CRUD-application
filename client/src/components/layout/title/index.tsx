import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import { Button } from "@mui/material";
import { lgLogo, smLogo, logoAltText } from "assets";
export const Title: React.FC<TitleProps> = ({ collapsed }) => {
	const { Link } = useRouterContext();

	return (
		<Button fullWidth variant="text" disableRipple>
			<Link to="/">
				{collapsed ? (
					<img src={lgLogo} alt={logoAltText} width="28px" />
				) : (
					<img src={smLogo} alt={logoAltText} width="140px" />
				)}
			</Link>
		</Button>
	);
};

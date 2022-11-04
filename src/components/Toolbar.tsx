import { AppBar, Toolbar as AppBarContent, Typography } from "@mui/material";

const Toolbar = () => {
	return (
		<>
			<AppBarContent />
			<AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
				<AppBarContent variant="dense">
					<Typography>© 2021 Tempus.js</Typography>
				</AppBarContent>
			</AppBar>
		</>
	);
};

export default Toolbar;

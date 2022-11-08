import { AppBar, Box, Toolbar as AppBarContent } from "@mui/material";
import { useState } from "react";
import ToolbarContent from "./ToolbarContent";
import ToolbarModal from "./ToolbarModal";

const Toolbar = () => {
	const [message, setMessage] = useState<string | null>(null);

	return (
		<>
			<Box mt={1}>
				<AppBarContent />
			</Box>
			<AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
				<AppBarContent>
					<ToolbarContent setMessage={setMessage} />
					<ToolbarModal message={message} />
				</AppBarContent>
			</AppBar>
		</>
	);
};

export default Toolbar;

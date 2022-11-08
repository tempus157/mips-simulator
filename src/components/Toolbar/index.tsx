import { useMIPS } from "@/libs/mips";
import { AppBar, Box, Toolbar as AppBarContent } from "@mui/material";
import ToolbarContent from "./ToolbarContent";
import ToolbarModal from "./ToolbarModal";

const Toolbar = () => {
	const [mips, dispatch] = useMIPS();

	try {
		const a = 10;
	} catch (e) {
		if (e instanceof Error) {
			// Show e.message
		} else {
			console.log(`Unknown error: ${e}`);
		}
	}

	return (
		<>
			<Box mt={1}>
				<AppBarContent />
			</Box>
			<AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
				<AppBarContent>
					<ToolbarContent />
					<ToolbarModal />
				</AppBarContent>
			</AppBar>
		</>
	);
};

export default Toolbar;

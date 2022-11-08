import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";

import { useMIPSDialog } from "$/mips/libs/context";

const MIPSDialog = () => {
	const dialog = useMIPSDialog();

	return (
		<Dialog open={dialog.error} onClose={dialog.resolve}>
			<DialogTitle>An error occurred!</DialogTitle>
			<DialogContent>
				<DialogContentText>{dialog.message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={dialog.resolve} autoFocus>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default MIPSDialog;

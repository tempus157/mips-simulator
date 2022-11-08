import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { useMIPSDialog } from "$libs/mips/context";

const MIPSDialog = () => {
	const dialog = useMIPSDialog();

	return (
		<Dialog open={dialog.error} onClose={dialog.close}>
			<DialogTitle>An error occurred!</DialogTitle>
			<DialogContent>
				<DialogContentText>{dialog.message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={dialog.close} autoFocus>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default MIPSDialog;

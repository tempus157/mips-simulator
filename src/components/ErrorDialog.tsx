import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";

import { useMIPSError } from "@/libs/mips";

const ErrorDialog = () => {
	const [mipsError, dispatch] = useMIPSError();

	const handleClose = () => {
		dispatch({ type: "RESOLVE" });
	};

	return (
		<Dialog open={mipsError.error} onClose={handleClose}>
			<DialogTitle>An error occurred!</DialogTitle>
			<DialogContent>
				<DialogContentText>{mipsError.message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} autoFocus>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ErrorDialog;

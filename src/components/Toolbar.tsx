import { FormEvent } from "react";
import { PlayArrow, SkipNext, Stop, Upload } from "@mui/icons-material";
import { useMIPS } from "@/libs/mips";

import {
	AppBar,
	Box,
	IconButton,
	Toolbar as AppBarContent,
	Tooltip,
} from "@mui/material";

const Toolbar = () => {
	const [mips, dispatch] = useMIPS();

	const handleLoad = (e: FormEvent<HTMLInputElement>) => {
		dispatch({ type: "LOAD", files: e.currentTarget.files });
	};

	return (
		<>
			<Box mt={1}>
				<AppBarContent />
			</Box>
			<AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
				<AppBarContent>
					<input id="src" type="file" onInput={handleLoad} hidden />
					<label htmlFor="src">
						<Tooltip title="Load">
							<IconButton color="inherit" component="div">
								<Upload />
							</IconButton>
						</Tooltip>
					</label>
					<Box flexGrow={1} />
					<Tooltip title="Reset">
						<IconButton color="inherit">
							<Stop />
						</IconButton>
					</Tooltip>
					<Tooltip title="Run">
						<IconButton color="inherit">
							<PlayArrow />
						</IconButton>
					</Tooltip>
					<Tooltip title="Step">
						<IconButton color="inherit">
							<SkipNext />
						</IconButton>
					</Tooltip>
				</AppBarContent>
			</AppBar>
		</>
	);
};

export default Toolbar;

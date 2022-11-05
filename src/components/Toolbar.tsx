import { PlayArrow, SkipNext, Stop, Upload } from "@mui/icons-material";
import {
	AppBar,
	Toolbar as AppBarContent,
	Box,
	IconButton,
	Tooltip,
} from "@mui/material";

const Toolbar = () => {
	return (
		<>
			<Box mt={1}>
				<AppBarContent />
			</Box>
			<AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
				<AppBarContent>
					<Tooltip title="Load">
						<IconButton color="inherit">
							<Upload />
						</IconButton>
					</Tooltip>
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

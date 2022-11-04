import { PlayArrow, SkipNext, Stop, Upload } from "@mui/icons-material";
import {
	AppBar,
	Box,
	IconButton,
	Toolbar as AppBarContent,
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
					<Box
						width="100%"
						display="flex"
						justifyContent="space-between"
					>
						<Tooltip title="Load">
							<IconButton color="inherit">
								<Upload />
							</IconButton>
						</Tooltip>
						<Box>
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
						</Box>
					</Box>
				</AppBarContent>
			</AppBar>
		</>
	);
};

export default Toolbar;

import { FormEvent } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { PlayArrow, SkipNext, Stop, Upload } from "@mui/icons-material";

const ToolbarContent = () => {
	const handleLoad = (e: FormEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files?.[0];
		if (!file) {
			console.log("No file selected");
			return;
		}

		const reader = new FileReader();
		reader.readAsText(file);
		reader.onload = (e) => {
			if (!e.target) {
				throw new Error("FileReader error");
			}
			console.log(typeof e.target.result);
		};
		reader.onerror = () => {
			console.log("error");
		};
	};
	return (
		<>
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
		</>
	);
};

export default ToolbarContent;

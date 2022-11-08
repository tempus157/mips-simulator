import { Dispatch, FormEvent, SetStateAction } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { PlayArrow, SkipNext, Stop, Upload } from "@mui/icons-material";
import { useMIPS } from "@/libs/mips";

interface ToolbarContentProps {
	setMessage: Dispatch<SetStateAction<string | null>>;
}

const ToolbarContent = ({ setMessage }: ToolbarContentProps) => {
	const [mips, dispatch] = useMIPS();

	const handleLoad = (e: FormEvent<HTMLInputElement>) => {
		try {
			dispatch({ type: "LOAD", files: e.currentTarget.files });
		} catch (error) {
			if (error instanceof Error) {
				setMessage(error.message);
			} else {
				console.error("Unknown error", error);
				setMessage(
					"An unknown error has occurred! See the console for details."
				);
			}
		}
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

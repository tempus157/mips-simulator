import { Typography } from "@mui/material";

interface TitleBarProps {
	text: string;
}

const Title = ({ text }: TitleBarProps) => {
	return (
		<Typography m={3} variant="h5" align="center">
			{text}
		</Typography>
	);
};

export default Title;

import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import TitleBar from "@/components/TitleBar";
import { translateInstruction } from "@/libs/translator";
import { Typography } from "@mui/material";

const Home: NextPage = () => {
	const instruction = translateInstruction("addi $t0, $zero, 16");

	return (
		<>
			<NextSeo
				title="MIPS Simulator - Tempus.js"
				description="MIPS Simulator with a pipeline"
			/>
			<TitleBar text="MIPS Simulator" />
			<Typography>{instruction.toString(2)}</Typography>
		</>
	);
};

export default Home;

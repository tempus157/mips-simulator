import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import TitleBar from "@/components/TitleBar";
import { translateInstruction } from "@/libs/translator";
import { Typography } from "@mui/material";

const Home: NextPage = () => {
	const add = translateInstruction("add $t0, $t1, $t2");
	const addi = translateInstruction("addi $t0, $zero, 16");

	return (
		<>
			<NextSeo
				title="MIPS Simulator - Tempus.js"
				description="MIPS Simulator with a pipeline"
			/>
			<TitleBar text="MIPS Simulator" />
			<Typography>{add.toString(2)}</Typography>
			<Typography>{addi.toString(2)}</Typography>
		</>
	);
};

export default Home;

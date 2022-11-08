import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Typography } from "@mui/material";
import MIPSProvider from "$components/MIPSProvider";
import MIPSCard from "$components/MIPSCard";
import MIPSMenu from "$components/MIPSMenu";
import MIPSDialog from "$components/MIPSDialog";

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				title="MIPS Simulator - Tempus.js"
				description="MIPS Simulator with a pipeline"
			/>
			<Typography m={3} variant="h5" align="center">
				MIPS Simulator
			</Typography>
			<MIPSProvider>
				<MIPSCard />
				<MIPSMenu />
				<MIPSDialog />
			</MIPSProvider>
		</>
	);
};

export default Home;

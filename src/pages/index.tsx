import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Box, Grid } from "@mui/material";
import TitleBar from "@/components/TitleBar";
import UtilityCard from "@/components/UtilityCard";

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				title="MIPS Simulator - Tempus.js"
				description="MIPS Simulator with a pipeline"
			/>
			<TitleBar text="MIPS Simulator" />
			<Box m="auto" p={1} maxWidth={720}>
				<Grid container spacing={1} justifyContent="center">
					<Grid item width="100%">
						<UtilityCard />
					</Grid>
					<Grid item width="100%">
						<UtilityCard />
					</Grid>
					<Grid item width="100%">
						<UtilityCard />
					</Grid>
					<Grid item width="50%">
						<UtilityCard />
					</Grid>
					<Grid item width="50%">
						<UtilityCard />
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Home;

import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Box, Grid } from "@mui/material";
import Title from "@/components/Title";
import Toolbar from "@/components/Toolbar";
import RegisterCard from "@/components/RegisterCard";
import MemoryCard from "@/components/MemoryCard";

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				title="MIPS Simulator - Tempus.js"
				description="MIPS Simulator with a pipeline"
			/>
			<Title text="MIPS Simulator" />
			<Box m="auto" pl={1} pr={1} maxWidth={720}>
				<Grid container spacing={1} justifyContent="center">
					<Grid item width="50%">
						<RegisterCard />
					</Grid>
					<Grid item width="50%">
						<RegisterCard />
					</Grid>
					<Grid item width="100%">
						<MemoryCard />
					</Grid>
					<Grid item width="100%">
						<MemoryCard />
					</Grid>
				</Grid>
			</Box>
			<Toolbar />
		</>
	);
};

export default Home;

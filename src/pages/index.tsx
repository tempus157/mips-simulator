import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Title from "$/components/Title";

import {
	MIPSCard,
	MIPSDialog,
	MIPSMenu,
	MIPSProvider,
} from "$/mips/components";

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				title="MIPS Simulator - Tempus.js"
				description="MIPS Simulator with a pipeline"
			/>
			<Title text="MIPS Simulator" />
			<MIPSProvider>
				<MIPSCard />
				<MIPSMenu />
				<MIPSDialog />
			</MIPSProvider>
		</>
	);
};

export default Home;

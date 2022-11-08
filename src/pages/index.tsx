import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Title from "$/components/Title";
import MIPSMenu from "$/mips/components/MIPSMenu";
import MIPSProvider from "$/mips/components/MIPSProvider";
import MIPSDialog from "$/mips/components/MIPSDialog";
import MIPSCard from "$/mips/components/MIPSCard";

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

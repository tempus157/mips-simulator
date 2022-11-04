import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import TitleBar from "@/components/TitleBar";

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				title="MIPS Simulator - Tempus.js"
				description="MIPS Simulator with a pipeline"
			/>
			<TitleBar text="MIPS Simulator" />
		</>
	);
};

export default Home;

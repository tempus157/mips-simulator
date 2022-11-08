import { MIPS } from "../reducer";
import { translateInstruction } from "@/libs/translator";

export const load = (mips: MIPS, src: string): MIPS => {
	const textMemory = src
		.split("\n")
		.map((instructionText) => translateInstruction(instructionText));
	return { ...mips, textMemory };
};

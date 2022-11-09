import { MIPSState } from "../reducer";
import { translateInstruction } from "$libs/translator";

export const load = (state: MIPSState, src: string): MIPSState => {
	const textMemory = src.split("\n").map(translateInstruction);
	return { ...state, textMemory };
};

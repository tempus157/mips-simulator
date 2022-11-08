import { translateInstruction } from "@/libs/translator";

export interface MIPS {
	programCounter: number;
	register: number[];
	dataMemory: number[];
	textMemory: number[];
}

export const defaultValue: MIPS = {
	programCounter: 0,
	register: [0, 0, 0, 0, 0, 0, 0, 0],
	dataMemory: [],
	textMemory: [],
};

export const loadSrc = (mips: MIPS, src: string): MIPS => {
	const textMemory = src
		.split(" ")
		.map((instructionText) => translateInstruction(instructionText));
	return { ...mips, textMemory };
};

export const reset = (mips: MIPS): MIPS => {
	return {
		...mips,
		programCounter: defaultValue.programCounter,
		register: defaultValue.register,
	};
};

// TODO: Implement
export const run = (mips: MIPS): MIPS => {
	return mips;
};

// TODO: Implement
export const step = (mips: MIPS): MIPS => {
	return mips;
};

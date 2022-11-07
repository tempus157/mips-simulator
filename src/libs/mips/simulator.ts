import { translateInstruction } from "@/libs/translator";

export interface State {
	programCounter: number;
	register: number[];
	dataMemory: number[];
	textMemory: number[];
}

export const loadSrc = (state: State, src: string): State => {
	const textMemory = src
		.split(" ")
		.map((instructionText) => translateInstruction(instructionText));
	return { ...state, textMemory };
};

// TODO: Implement
export const reset = (state: State): State => {
	return state;
};

// TODO: Implement
export const run = (state: State): State => {
	return state;
};

// TODO: Implement
export const step = (state: State): State => {
	return state;
};

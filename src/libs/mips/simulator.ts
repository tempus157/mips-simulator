import { translateInstruction } from "@/libs/translator";

export interface State {
	programCounter: number;
	register: number[];
	dataMemory: number[];
	textMemory: number[];
}

export const defaultValue: State = {
	programCounter: 0,
	register: [0, 0, 0, 0, 0, 0, 0, 0],
	dataMemory: [],
	textMemory: [],
};

export const loadSrc = (state: State, src: string): State => {
	const textMemory = src
		.split(" ")
		.map((instructionText) => translateInstruction(instructionText));
	return { ...state, textMemory };
};

export const reset = (state: State): State => {
	return {
		...state,
		programCounter: defaultValue.programCounter,
		register: defaultValue.register,
	};
};

// TODO: Implement
export const run = (state: State): State => {
	return state;
};

// TODO: Implement
export const step = (state: State): State => {
	return state;
};

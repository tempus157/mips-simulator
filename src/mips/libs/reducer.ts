import { load, reset, run, step } from "./actions";
import { withException } from "./error";

export interface MIPS {
	programCounter: number;
	register: number[];
	dataMemory: number[];
	textMemory: number[];
}

export interface MIPSError {
	error: boolean;
	message: string;
}

export const defaultValue: MIPS & MIPSError = {
	programCounter: 0,
	register: [0, 0, 0, 0, 0, 0, 0, 0],
	dataMemory: [],
	textMemory: [],
	error: false,
	message: "",
};

export type MIPSAction =
	| { type: "LOAD"; src: string }
	| { type: "RESET" }
	| { type: "RUN" }
	| { type: "STEP" };

export type MIPSErrorAction = { type: "CLOSE" };

export const reducer = (
	state: MIPS & MIPSError,
	action: MIPSAction | MIPSErrorAction
): MIPS & MIPSError => {
	switch (action.type) {
		case "LOAD":
			return withException(state, () => load(state, action.src));
		case "RESET":
			return withException(state, () => reset(state));
		case "RUN":
			return withException(state, () => run(state));
		case "STEP":
			return withException(state, () => step(state));
		case "CLOSE":
			return { ...state, error: false };
		default:
			throw new Error("Unknown action type");
	}
};

import { load, reset, run, step } from "./actions";
import { withException } from "./exception";

export type MIPS = {
	programCounter: number;
	register: number[];
	dataMemory: number[];
	textMemory: number[];
};

export type MIPSError = {
	error: boolean;
	message: string;
};

export const defaultValue: MIPS & MIPSError = {
	programCounter: 0,
	register: [0, 0, 0, 0, 0, 0, 0, 0],
	dataMemory: [],
	textMemory: [],
	error: false,
	message: "",
};

export type MIPSAction =
	| { type: "LOAD"; files: FileList | null }
	| { type: "RESET" }
	| { type: "RUN" }
	| { type: "STEP" };

export type MIPSErrorAction =
	| { type: "OCCUR"; message: string }
	| { type: "RESOLVE" };

export const reducer = (
	state: MIPS & MIPSError,
	action: MIPSAction | MIPSErrorAction
): MIPS & MIPSError => {
	switch (action.type) {
		case "LOAD":
			return withException(state, () => load(state, action.files));
		case "RESET":
			return withException(state, () => reset(state));
		case "RUN":
			return withException(state, () => run(state));
		case "STEP":
			return withException(state, () => step(state));
		case "OCCUR":
			return { ...state, error: true, message: action.message };
		case "RESOLVE":
			return { ...state, error: false };
		default:
			throw new Error("Unknown action type");
	}
};

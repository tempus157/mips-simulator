import { load, reset, run, step } from "./actions";
import { withError } from "./error";

export interface MIPSState {
	programCounter: number;
	register: number[];
	dataMemory: number[];
	textMemory: number[];
}

export interface MIPSErrorState {
	error: boolean;
	message: string;
}

export const defaultValue: MIPSState & MIPSErrorState = {
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
	state: MIPSState & MIPSErrorState,
	action: MIPSAction | MIPSErrorAction
): MIPSState & MIPSErrorState => {
	switch (action.type) {
		case "LOAD":
			return withError(state, () => load(state, action.src));
		case "RESET":
			return withError(state, () => reset(state));
		case "RUN":
			return withError(state, () => run(state));
		case "STEP":
			return withError(state, () => step(state));
		case "CLOSE":
			return { ...state, error: false };
		default:
			throw new Error("Unknown action type");
	}
};

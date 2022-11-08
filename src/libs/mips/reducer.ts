import { occur, load, reset, run, step, resolve } from "./actions";

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

export type MIPSWithError = MIPS & MIPSError;

export const defaultValue: MIPSWithError = {
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

export type MIPSWithErrorAction = MIPSAction | MIPSErrorAction;

export const reducer = (
	state: MIPSWithError,
	action: MIPSWithErrorAction
): MIPSWithError => {
	switch (action.type) {
		case "OCCUR":
			return occur(state, action.message);
		case "RESOLVE":
			return resolve(state);
	}

	try {
		switch (action.type) {
			case "LOAD":
				return load(state, action.files);
			case "RESET":
				return reset(state);
			case "RUN":
				return run(state);
			case "STEP":
				return step(state);
		}
	} catch (error) {
		if (error instanceof Error) {
			return occur(state, error.message);
		} else {
			console.error(error);
			return occur(
				state,
				"An unknown error has occurred! See the console for details."
			);
		}
	}
};

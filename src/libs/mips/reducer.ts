import { load, reset, run, step } from "./actions";

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

export type Action =
	| { type: "LOAD"; files: FileList | null }
	| { type: "RESET" }
	| { type: "RUN" }
	| { type: "STEP" };

export const reducer = (mips: MIPS, action: Action): MIPS => {
	switch (action.type) {
		case "LOAD":
			return load(mips, action.files);
		case "RESET":
			return reset(mips);
		case "RUN":
			return run(mips);
		case "STEP":
			return step(mips);
		default:
			throw new Error("Invalid action");
	}
};

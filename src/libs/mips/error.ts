import { MIPSErrorState, MIPSState } from "./reducer";

export class MIPSError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "MIPSError";
	}
}

export const withError = (
	state: MIPSState,
	action: () => MIPSState
): MIPSState & MIPSErrorState => {
	let newState: MIPSState;

	try {
		newState = action();
	} catch (error) {
		if (error instanceof MIPSError) {
			return { ...state, error: true, message: error.message };
		}

		console.error(error);
		return {
			...state,
			error: true,
			message: "An unknown error occurred! See the console for details.",
		};
	}

	return { ...newState, error: false, message: "" };
};

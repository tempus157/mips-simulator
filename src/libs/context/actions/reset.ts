import { defaultValue, MIPSState } from "../reducer";

export const reset = (state: MIPSState): MIPSState => {
	return {
		...state,
		programCounter: defaultValue.programCounter,
		register: defaultValue.register,
	};
};

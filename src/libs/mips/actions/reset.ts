import { defaultValue, MIPSWithError } from "../reducer";

export const reset = (state: MIPSWithError): MIPSWithError => {
	return {
		...state,
		programCounter: defaultValue.programCounter,
		register: defaultValue.register,
	};
};

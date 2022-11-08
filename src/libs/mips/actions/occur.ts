import { MIPSWithError } from "../reducer";

export const occur = (state: MIPSWithError, message: string): MIPSWithError => {
	return { ...state, error: true, message };
};

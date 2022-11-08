import { MIPSWithError } from "../reducer";

export const resolve = (state: MIPSWithError): MIPSWithError => {
	return { ...state, error: false };
};

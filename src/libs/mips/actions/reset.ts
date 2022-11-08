import { defaultValue, MIPS } from "../reducer";

export const reset = (mips: MIPS): MIPS => {
	return {
		...mips,
		programCounter: defaultValue.programCounter,
		register: defaultValue.register,
	};
};

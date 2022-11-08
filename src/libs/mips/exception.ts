import { MIPSError, MIPS } from "./reducer";

export class MIPSException extends Error {
	constructor(message: string) {
		super(message);
		this.name = "MIPSError";
	}
}

export const withException = (
	mips: MIPS,
	action: () => MIPS
): MIPS & MIPSError => {
	let result: MIPS;

	try {
		result = action();
	} catch (exception) {
		if (exception instanceof MIPSException) {
			return { ...mips, error: true, message: exception.message };
		}

		console.error(exception);
		return {
			...mips,
			error: true,
			message: "An unknown error occurred! See the console for details.",
		};
	}

	return { ...result, error: false, message: "" };
};

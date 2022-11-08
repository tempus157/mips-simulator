import { MIPS } from "../reducer";
import { translateInstruction } from "@/libs/translator";
import { MIPSException } from "../exception";

export const load = (mips: MIPS, files: FileList | null): MIPS => {
	console.log(files);
	const file = files?.[0];
	if (!file) {
		throw new MIPSException("No file selected");
	}

	let src = "";
	const reader = new FileReader();
	reader.readAsText(file);

	reader.onload = (e) => {
		if (!e.target) {
			throw new MIPSException("FileReader error");
		}
		if (typeof e.target.result !== "string") {
			throw new MIPSException("FileReader error");
		}

		src = e.target.result;
	};

	reader.onerror = () => {
		throw new MIPSException("Cannot read file");
	};

	const textMemory = src
		.split(" ")
		.map((instructionText) => translateInstruction(instructionText));
	return { ...mips, textMemory };
};

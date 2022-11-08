import { MIPS } from "../reducer";
import { translateInstruction } from "@/libs/translator";

export const load = (mips: MIPS, files: FileList | null): MIPS => {
	const file = files?.[0];
	if (!file) {
		throw new Error("No file selected");
	}

	let src = "";
	const reader = new FileReader();
	reader.readAsText(file);

	reader.onload = (e) => {
		if (!e.target) {
			throw new Error("FileReader error");
		}

		if (typeof e.target.result !== "string") {
			throw new Error("FileReader error");
		}

		src = e.target.result;
	};

	reader.onerror = () => {
		throw new Error("Cannot read file");
	};

	const textMemory = src
		.split(" ")
		.map((instructionText) => translateInstruction(instructionText));
	return { ...mips, textMemory };
};

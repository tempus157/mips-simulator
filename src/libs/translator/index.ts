import {
	functMap,
	opcodeMap,
	registerMap,
	shift,
} from "@/libs/translator/reference";

interface Translator {
	(instruction: string[]): number;
}

export const translateInstruction = (instructionText: string) => {
	const instruction = instructionText
		.split(/[\s,()]+/)
		.filter((text) => text.length > 0);
	if (instruction.length === 0) {
		throw new Error("Invalid instruction");
	}

	const translator = translatorMap.get(instruction[0]);
	if (!translator) {
		throw new Error("Invalid instruction");
	}
	return translator(instruction);
};

const getOpcode = (opcode: string) => {
	const result = opcodeMap.get(opcode);
	if (result === undefined) {
		throw new Error(`Invalid opcode: ${opcode}`);
	}
	return result;
};

const getRegister = (register: string) => {
	const result = registerMap.get(register);
	if (result === undefined) {
		throw new Error(`Invalid register: ${register}`);
	}
	return result;
};

const getFunct = (funct: string) => {
	const result = functMap.get(funct);
	if (result === undefined) {
		throw new Error(`Invalid funct: ${funct}`);
	}
	return result;
};

const getImmediate = (immediate: string) => {
	const result = parseInt(immediate, 10);
	if (isNaN(result)) {
		throw new Error(`Invalid immediate: ${immediate}`);
	}
	return result;
};

const RegisterFormat: Translator = (instruction: string[]) => {
	if (instruction.length !== 4) {
		throw new Error("Invalid instruction");
	}

	return (
		(getOpcode(instruction[0]) << shift.opcode) |
		(getRegister(instruction[2]) << shift.rs) |
		(getRegister(instruction[3]) << shift.rt) |
		(getRegister(instruction[1]) << shift.rd) |
		getFunct(instruction[0])
	);
};

const ImmediateFormat: Translator = (instruction: string[]) => {
	if (instruction.length !== 4) {
		throw new Error("Invalid instruction");
	}

	return (
		(getOpcode(instruction[0]) << shift.opcode) |
		(getRegister(instruction[2]) << shift.rs) |
		(getRegister(instruction[1]) << shift.rt) |
		getImmediate(instruction[3])
	);
};

const JumpFormat: Translator = (instruction: string[]) => {
	if (instruction.length !== 2) {
		throw new Error("Invalid instruction");
	}

	return (
		(getOpcode(instruction[0]) << shift.opcode) |
		getImmediate(instruction[1])
	);
};

const TransferFormat: Translator = (instruction: string[]) => {
	if (instruction.length !== 4) {
		throw new Error("Invalid instruction");
	}

	return (
		(getOpcode(instruction[0]) << shift.opcode) |
		(getRegister(instruction[3]) << shift.rs) |
		(getRegister(instruction[1]) << shift.rt) |
		getImmediate(instruction[2])
	);
};

const translatorMap = new Map<string, Translator>([
	["add", RegisterFormat],
	["addi", ImmediateFormat],
	["addiu", ImmediateFormat],
	["addu", RegisterFormat],
	["and", RegisterFormat],
	["andi", ImmediateFormat],
	["beq", ImmediateFormat],
	["bne", ImmediateFormat],
	["j", JumpFormat],
	["jal", JumpFormat],
	["jr", RegisterFormat],
	["lui", ImmediateFormat],
	["lw", TransferFormat],
	["nor", RegisterFormat],
	["or", RegisterFormat],
	["ori", ImmediateFormat],
	["slt", RegisterFormat],
	["slti", ImmediateFormat],
	["sltiu", ImmediateFormat],
	["sltu", RegisterFormat],
	["sll", RegisterFormat],
	["srl", RegisterFormat],
	["sw", TransferFormat],
	["sub", RegisterFormat],
]);

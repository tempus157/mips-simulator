import { MIPSException } from "@/libs/mips/exception";
import { functMap, opcodeMap, registerMap, shift } from "./reference";

interface Translator {
	(instruction: string[]): number;
}

export const translateInstruction = (instructionText: string) => {
	const instruction = instructionText
		.split(/[\s,()]+/)
		.filter((text) => text.length > 0);

	if (instruction.length === 0) {
		throw new MIPSException("Empty instruction");
	}

	const translator = translatorMap.get(instruction[0]);
	if (!translator) {
		throw new MIPSException("Invalid instruction");
	}
	return translator(instruction);
};

const getOpcode = (opcode: string) => {
	const result = opcodeMap.get(opcode);
	if (result === undefined) {
		throw new MIPSException(`Invalid opcode: ${opcode}`);
	}
	return result;
};

const getRegister = (register: string) => {
	const result = registerMap.get(register);
	if (result === undefined) {
		throw new MIPSException(`Invalid register: ${register}`);
	}
	return result;
};

const getFunct = (funct: string) => {
	const result = functMap.get(funct);
	if (result === undefined) {
		throw new MIPSException(`Invalid funct: ${funct}`);
	}
	return result;
};

const getImmediate = (immediate: string) => {
	const result = parseInt(immediate, 10);
	if (isNaN(result)) {
		throw new MIPSException(`Invalid immediate: ${immediate}`);
	}
	return result;
};

const registerFormat: Translator = (instruction: string[]) => {
	if (instruction.length !== 4) {
		throw new MIPSException("Invalid register format");
	}

	return (
		(getOpcode(instruction[0]) << shift.opcode) |
		(getRegister(instruction[2]) << shift.rs) |
		(getRegister(instruction[3]) << shift.rt) |
		(getRegister(instruction[1]) << shift.rd) |
		getFunct(instruction[0])
	);
};

const shiftFormat: Translator = (instruction: string[]) => {
	if (instruction.length !== 4) {
		throw new MIPSException("Invalid shift format");
	}

	return (
		(getOpcode(instruction[0]) << shift.opcode) |
		(getRegister(instruction[2]) << shift.rt) |
		(getRegister(instruction[1]) << shift.rd) |
		(getImmediate(instruction[3]) << shift.shamt) |
		getFunct(instruction[0])
	);
};

const immediateFormat: Translator = (instruction: string[]) => {
	if (instruction.length !== 4) {
		throw new MIPSException(`Invalid immediate format`);
	}

	return (
		(getOpcode(instruction[0]) << shift.opcode) |
		(getRegister(instruction[2]) << shift.rs) |
		(getRegister(instruction[1]) << shift.rt) |
		getImmediate(instruction[3])
	);
};

const dataFormat: Translator = (instruction: string[]) => {
	if (instruction.length !== 4) {
		throw new MIPSException("Invalid data format");
	}

	return (
		(getOpcode(instruction[0]) << shift.opcode) |
		(getRegister(instruction[3]) << shift.rs) |
		(getRegister(instruction[1]) << shift.rt) |
		getImmediate(instruction[2])
	);
};

const jumpFormat: Translator = (instruction: string[]) => {
	if (instruction.length !== 2) {
		throw new MIPSException("Invalid jump format");
	}

	return (
		(getOpcode(instruction[0]) << shift.opcode) |
		getImmediate(instruction[1])
	);
};

const translatorMap = new Map<string, Translator>([
	["add", registerFormat],
	["addi", immediateFormat],
	["addiu", immediateFormat],
	["addu", registerFormat],
	["and", registerFormat],
	["andi", immediateFormat],
	["beq", immediateFormat],
	["bne", immediateFormat],
	["j", jumpFormat],
	["jal", jumpFormat],
	["jr", registerFormat],
	["lui", immediateFormat],
	["lw", dataFormat],
	["nor", registerFormat],
	["or", registerFormat],
	["ori", immediateFormat],
	["slt", registerFormat],
	["slti", immediateFormat],
	["sltiu", immediateFormat],
	["sltu", registerFormat],
	["sll", shiftFormat],
	["srl", shiftFormat],
	["sw", dataFormat],
	["sub", registerFormat],
]);

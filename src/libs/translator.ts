interface Translator {
	(instruction: string[]): number;
}

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

const getImmediate = (immediate: string) => {
	const result = parseInt(immediate, 10);
	if (isNaN(result)) {
		throw new Error(`Invalid immediate: ${immediate}`);
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

const RFormatTranslator: Translator = (instruction: string[]) => {
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

const IFormatTranslator: Translator = (instruction: string[]) => {
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
const translatorMap = new Map<string, Translator>([
	["add", RFormatTranslator],
	["addi", IFormatTranslator],
]);

const opcodeMap = new Map<string, number>([
	["add", 0b000000],
	["addi", 0b001000],
]);

const registerMap = new Map<string, number>([
	["$zero", 0],
	["$at", 1],
	["$v0", 2],
	["$v1", 3],
	["$a0", 4],
	["$a1", 5],
	["$a2", 6],
	["$a3", 7],
	["$t0", 8],
	["$t1", 9],
	["$t2", 10],
	["$t3", 11],
	["$t4", 12],
	["$t5", 13],
	["$t6", 14],
	["$t7", 15],
	["$s0", 16],
	["$s1", 17],
	["$s2", 18],
	["$s3", 19],
	["$s4", 20],
	["$s5", 21],
	["$s6", 22],
	["$s7", 23],
	["$t8", 24],
	["$t9", 25],
	["$k0", 26],
	["$k1", 27],
	["$gp", 28],
	["$sp", 29],
	["$fp", 30],
	["$ra", 31],
]);

const functMap = new Map<string, number>([["add", 0b100000]]);

const shift = {
	opcode: 26,
	rs: 21,
	rt: 16,
	rd: 11,
	shamt: 6,
} as const;

export const translateInstruction = (instructionText: string) => {
	const instruction = instructionText
		.split(/[\s,()]+/)
		.filter((text) => text.length > 0);
	if (instruction.length === 0) {
		throw new Error(`Invalid instruction: ${instructionText}`);
	}

	const translator = translatorMap.get(instruction[0]);
	if (!translator) {
		throw new Error(`Unknown instruction: ${instruction[0]}`);
	}
	return translator(instruction);
};

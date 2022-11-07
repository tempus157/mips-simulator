export interface State {
	programCounter: number;
	register: number[];
	dataMemory: number[];
	textMemory: number[];
}

// TODO: Implement functions
export const loadSrc = (state: State, src: string): State => {
	return state;
};

export const reset = (state: State): State => {
	return state;
};

export const run = (state: State): State => {
	return state;
};

export const step = (state: State): State => {
	return state;
};

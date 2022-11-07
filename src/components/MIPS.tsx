import {
	createContext,
	Dispatch,
	PropsWithChildren,
	useContext,
	useReducer,
} from "react";

interface State {
	programCounter: number;
	register: number[];
	dataMemory: number[];
	textMemory: number[];
}

type Action =
	| { type: "RESET" }
	| { type: "PC"; value: number }
	| { type: "REG"; index: number; value: number }
	| { type: "DATA"; index: number; value: number }
	| { type: "TEXT"; index: number; value: number };

const defaultValue: State = {
	programCounter: 0,
	register: [0, 0, 0, 0, 0, 0, 0, 0],
	dataMemory: [],
	textMemory: [],
};

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "RESET": {
			return {
				...state,
				programCounter: defaultValue.programCounter,
				register: defaultValue.register,
			};
		}
		case "PC": {
			return { ...state, programCounter: action.value };
		}
		case "REG": {
			const register = [...state.register];
			register[action.index] = action.value;
			return { ...state, register };
		}
		case "DATA": {
			const dataMemory = [...state.dataMemory];
			dataMemory[action.index] = action.value;
			return { ...state, dataMemory };
		}
		case "TEXT": {
			const textMemory = [...state.textMemory];
			textMemory[action.index] = action.value;
			return { ...state, textMemory };
		}
		default: {
			throw new Error("Invalid action");
		}
	}
};

const StateContext = createContext<State | null>(null);
const DispatchContext = createContext<Dispatch<Action> | null>(null);

export const useMIPS = (): [State, Dispatch<Action>] => {
	const stateContext = useContext(StateContext);
	const dispatchContext = useContext(DispatchContext);

	if (!stateContext || !dispatchContext) {
		throw new Error("useMIPS must be used within a MIPS");
	} else {
		return [stateContext, dispatchContext];
	}
};

const MIPS = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(reducer, defaultValue);

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

export default MIPS;

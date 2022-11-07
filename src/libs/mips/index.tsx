import {
	createContext,
	Dispatch,
	PropsWithChildren,
	useContext,
	useReducer,
} from "react";

import {
	defaultValue,
	loadSrc,
	reset,
	run,
	State,
	step,
} from "@/libs/mips/simulator";

type Action =
	| { type: "LOAD"; src: string }
	| { type: "RESET" }
	| { type: "RUN" }
	| { type: "STEP" };

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "LOAD":
			return loadSrc(state, action.src);
		case "RESET":
			return reset(state);
		case "RUN":
			return run(state);
		case "STEP":
			return step(state);
		default:
			throw new Error("Invalid action");
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

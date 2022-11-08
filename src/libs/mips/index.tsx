import {
	createContext,
	Dispatch,
	PropsWithChildren,
	useContext,
	useReducer,
} from "react";

import { defaultValue, loadSrc, reset, run, step, MIPS } from "./simulator";

type Action =
	| { type: "LOAD"; src: string }
	| { type: "RESET" }
	| { type: "RUN" }
	| { type: "STEP" };

const reducer = (mips: MIPS, action: Action): MIPS => {
	switch (action.type) {
		case "LOAD":
			return loadSrc(mips, action.src);
		case "RESET":
			return reset(mips);
		case "RUN":
			return run(mips);
		case "STEP":
			return step(mips);
		default:
			throw new Error("Invalid action");
	}
};

const MIPSContext = createContext<MIPS | null>(null);
const DispatchContext = createContext<Dispatch<Action> | null>(null);

export const useMIPS = (): [MIPS, Dispatch<Action>] => {
	const stateContext = useContext(MIPSContext);
	const dispatchContext = useContext(DispatchContext);

	if (!stateContext || !dispatchContext) {
		throw new Error("useMIPS must be used within a MIPS");
	} else {
		return [stateContext, dispatchContext];
	}
};

const MIPSProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(reducer, defaultValue);

	return (
		<MIPSContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</MIPSContext.Provider>
	);
};

export default MIPSProvider;

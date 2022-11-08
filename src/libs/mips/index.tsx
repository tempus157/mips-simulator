import {
	createContext,
	Dispatch,
	PropsWithChildren,
	useContext,
	useReducer,
} from "react";

import { Action, defaultValue, MIPS, reducer } from "./reducer";

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

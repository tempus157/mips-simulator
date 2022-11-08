import {
	createContext,
	Dispatch,
	PropsWithChildren,
	useContext,
	useReducer,
} from "react";

import {
	defaultValue,
	MIPS,
	MIPSAction,
	MIPSError,
	MIPSErrorAction,
	reducer,
} from "./reducer";

const StateContext = createContext<(MIPS & MIPSError) | null>(null);
const DispatchContext = createContext<Dispatch<
	MIPSAction | MIPSErrorAction
> | null>(null);

export const useMIPS = (): [MIPS, Dispatch<MIPSAction>] => {
	const stateContext = useContext(StateContext);
	const dispatchContext = useContext(DispatchContext);

	if (!stateContext || !dispatchContext) {
		throw new Error("useMIPS must be used within a MIPSProvider");
	} else {
		return [stateContext, dispatchContext];
	}
};

export const useMIPSError = (): [MIPSError, Dispatch<MIPSErrorAction>] => {
	const stateContext = useContext(StateContext);
	const dispatchContext = useContext(DispatchContext);

	if (!stateContext || !dispatchContext) {
		throw new Error("useMIPSError must be used within a MIPSProvider");
	} else {
		return [stateContext, dispatchContext];
	}
};

const MIPSProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(reducer, defaultValue);

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

export default MIPSProvider;

import { createContext, Dispatch, useContext } from "react";

import {
	MIPSState,
	MIPSAction,
	MIPSErrorState,
	MIPSErrorAction,
} from "./reducer";

export const StateContext = createContext<(MIPSState & MIPSErrorState) | null>(
	null
);

export const DispatchContext = createContext<Dispatch<
	MIPSAction | MIPSErrorAction
> | null>(null);

export const useMIPSState = (): MIPSState => {
	const state = useContext(StateContext);
	if (!state) {
		throw new Error("useMIPSCard must be used within a MIPSProvider");
	}
	return state;
};

export const useMIPSDispatch = (): Dispatch<MIPSAction> => {
	const dispatch = useContext(DispatchContext);
	if (!dispatch) {
		throw new Error("useMIPSMenu must be used within a MIPSProvider");
	}
	return dispatch;
};

export const useMIPSDialog = () => {
	const state = useContext(StateContext);
	const dispatch = useContext(DispatchContext);

	if (!state || !dispatch) {
		throw new Error("useMIPSDialog must be used within a MIPSProvider");
	}

	return {
		error: state.error,
		message: state.message,
		close: () => dispatch({ type: "CLOSE" }),
	};
};

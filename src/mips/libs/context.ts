import { createContext, Dispatch, useContext } from "react";
import { MIPS, MIPSAction, MIPSError, MIPSErrorAction } from "./reducer";

export const StateContext = createContext<(MIPS & MIPSError) | null>(null);
export const DispatchContext = createContext<Dispatch<
	MIPSAction | MIPSErrorAction
> | null>(null);

export const useMIPS = (): MIPS => {
	const state = useContext(StateContext);

	if (!state) {
		throw new Error("useMIPSCard must be used within a MIPSProvider");
	} else {
		return state;
	}
};

export const useMIPSMenu = (): Dispatch<MIPSAction> => {
	const dispatch = useContext(DispatchContext);

	if (!dispatch) {
		throw new Error("useMIPSMenu must be used within a MIPSProvider");
	} else {
		return dispatch;
	}
};

export const useMIPSDialog = () => {
	const state = useContext(StateContext);
	const dispatch = useContext(DispatchContext);

	if (!state || !dispatch) {
		throw new Error("useMIPSDialog must be used within a MIPSProvider");
	} else {
		return {
			error: state.error,
			message: state.message,
			close: () => dispatch({ type: "CLOSE" }),
		};
	}
};

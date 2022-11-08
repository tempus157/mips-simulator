import { DispatchContext, StateContext } from "$/mips/libs/context";
import { defaultValue, reducer } from "$/mips/libs/reducer";
import { PropsWithChildren, useReducer } from "react";

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

import { PropsWithChildren, useReducer } from "react";
import { defaultValue, reducer } from "$/mips/libs/reducer";
import { DispatchContext, StateContext } from "$/libs/context";

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

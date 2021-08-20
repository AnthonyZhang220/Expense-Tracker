import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	transactions: [
	],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	function selectTransactionType(type){
		dispatch({
			type:"SELECT_TRANSACTIONTYPE",
			payload: type,
		})
	}

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
				selectTransactionType,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

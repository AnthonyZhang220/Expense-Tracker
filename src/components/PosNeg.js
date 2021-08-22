import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const PosNeg =({transaction})=> {

	const { addTransactionType } = useContext(GlobalContext);


	return (
	<div>
		<label htmlFor="type">Transaction Type</label>
		<br />
		<div className="posneg">
			<button className="btn" type="income" value='income' onClick={()=>addTransactionType(transaction.type)}>
				Income
			</button>
			<button className="btn" type="expense" value='expense' onClick={()=>addTransactionType(transaction.type)}>
				Expense
			</button>
		</div>
	</div>
	);

};

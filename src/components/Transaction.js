import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);
	const sign = transaction.type = 'expense' ? "-" : "+";
	return (
		<li className={transaction.type = 'expense' ? "minus" : "plus"}>
			{transaction.text}
			<span>
				{sign}${Math.abs(transaction.amount)}
			</span>
			<button className="delete-btn" onClick={()=> deleteTransaction(transaction.id)}>x</button>
		</li>
	);
};

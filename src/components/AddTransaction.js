import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { nanoid } from "nanoid";
import { PosNeg } from "./PosNeg";

export const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);
	const [type, setType] = useState("");

	const { addTransaction } = useContext(GlobalContext);
	const { addTransactionType } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		addTransactionType();

		const newTransaction = {
			id: nanoid(),
			text,
			amount: +amount,
			type,
		};

		addTransaction(newTransaction);
	};

	return (
		<>
			<h3>Add new transaction</h3>
			<form id="form">
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
					</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Enter amount..."
					/>
				</div>
				<div>
					<label htmlFor="type">Transaction Type</label>
					<br />
					<select className="posneg">
						<option
							className="btn"
							type="income"
							value="income"
							onSelect={(e) => setType(e.target.value)}
						>
							Income
						</option>
						<option
							className="btn"
							type="expense"
							value="expense"
							onSelect={(e) => setType(e.target.value)}
						>
							Expense
						</option>
					</select>
				</div>
				<button className="btn" onClick={onSubmit}>
					Add transaction
				</button>
			</form>
		</>
	);
};

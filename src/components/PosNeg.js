import React,{ useState } from "react";

export const PosNeg = () => {

	const [type, setType] = useState('');

	function checkSign(type){
		console.log(type);
		return <h4>{type} has been selected.</h4>;
	}

	return (
    
		<div>
			<label htmlFor="type">Transaction Type</label>
			<br />
			<div className="posneg">
				<button className="btn" type="income" value='income'  onClick={()=> checkSign('income')}>
					Income
				</button>
				<button className="btn" type="expense" value='expense'  onClick={()=> checkSign('expense')}>
					Expense
				</button>
			</div>
			<div>{checkSign()}</div>
		</div>
    
	);
};

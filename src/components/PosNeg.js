import React from "react";

export const PosNeg = () => {

  function checkSign(){
    console.log('@');
  }
	return (
    
		<div>
			<label htmlFor="type">Transaction Type</label>
			<br />
			<div className="posneg">
				<button className="btn" type="income" value='income' onClick={()=> checkSign(this.value)}>
					Income
				</button>
				<button className="btn" type="expense" value='expense' onClick={()=> checkSign(this.value)}>
					Expense
				</button>
			</div>
		</div>
    
	);
};

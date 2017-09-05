import React, { Component } from 'react';

class ControllGroup extends Component {
	render() {
		const { shape, dimention, dimentionName, controllTypeName, handleShapeChange } = this.props;
		return (
			<div className='controll-group'>
				<button type="button" 
								className="btn btn-default btn-decrement"
								onClick={() => {
									handleShapeChange({
										id: shape.id, 
										direction: 'dec', 
										controllTypeName: controllTypeName, 
										dimentionName: dimentionName
									})
								}}> -
				</button>

				<span className="shape-controll-value">{ dimentionName }: { dimention }</span>

				<button type="button" 
								className="btn btn-default btn-increment"
								onClick={() => {
									handleShapeChange({
										id: shape.id, 
										direction: 'inc', 
										controllTypeName: controllTypeName, 
										dimentionName: dimentionName
									})
								}}> +
				</button>
			</div>
		);
	}
}

export default ControllGroup;
import React, { Component } from 'react';

class ControlGroup extends Component {
	render() {
		const { shape, dimention, dimentionName, controlTypeName, handleShapeChange } = this.props;
		return (
			<div className='controll-group'>
				<button type="button" 
								className="btn btn-default btn-decrement"
								onClick={() => {
									handleShapeChange({
										id: shape.id, 
										direction: 'dec', 
										controlTypeName: controlTypeName, 
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
										controlTypeName: controlTypeName, 
										dimentionName: dimentionName
									})
								}}> +
				</button>
			</div>
		);
	}
}

export default ControlGroup;
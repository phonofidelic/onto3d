import React, { Component } from 'react';

class ControllsGroup extends Component {
	render() {
		const { controllType, controllValues, handleShapeChange } = this.props
		return (
			<div className="controlls-group col-xs-4">
				{ controllType }
				<div className='controll-group'>
					<button type="button" 
									className="btn btn-default btn-decrement"
									onClick={() => {handleShapeChange('dec')}}>-
					</button>
					<span className="shape-controll-value">x: { controllValues.x }</span>
					<button type="button" 
									className="btn btn-default btn-increment"
									onClick={() => {handleShapeChange('inc')}}>+
					</button>
				</div>

				<div className='controll-group'>
					<button type="button" className="btn btn-default btn-decrement">-</button>
					<span className="shape-controll-value">y: { controllValues.y }</span>
					<button type="button" className="btn btn-default btn-increment">+</button>
				</div>

				<div className='controll-group'>
					<button type="button" className="btn btn-default btn-decrement">-</button>
					<span className="shape-controll-value">z: { controllValues.z }</span>
					<button type="button" className="btn btn-default btn-increment">+</button>
				</div>
			</div>
		);
	}
}

export default ControllsGroup;
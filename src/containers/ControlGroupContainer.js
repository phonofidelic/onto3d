import React, { Component } from 'react';
import ControlGroup from '../components/ControlGroup';

class ControlGroupContainer extends Component {
	render() {
		const { shape, controlType, controlTypeName, handleShapeChange } = this.props;
		return (
			<div className="controll-group-container col-xs-4">
				{ controlTypeName }
				<ControlGroup dimentionName="x" 
											 dimention={controlType.x} 
											 controlTypeName={controlTypeName}
											 shape={shape}
											 handleShapeChange={handleShapeChange} />

				<ControlGroup dimentionName="y" 
											 dimention={controlType.y} 
											 controlTypeName={controlTypeName}
											 shape={shape}
											 handleShapeChange={handleShapeChange} />

				<ControlGroup dimentionName="z" 
											 dimention={controlType.z} 
											 controlTypeName={controlTypeName}
											 shape={shape}
											 handleShapeChange={handleShapeChange} />
			</div>
		);
	}
}

export default ControlGroupContainer;
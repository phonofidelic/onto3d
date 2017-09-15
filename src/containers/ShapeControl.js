import React, { Component } from 'react';
import ControlGroupContainer from './ControlGroupContainer';

class ShapeControl extends Component {

	// handleShapeChange(direction, controlTypeName, dimentionName) {
	// 	console.log('*** handleShapeChange:', direction, controlTypeName, dimentionName)
	// }

	render() {
		const { shape } = this.props;
		return (
			<div className="shape-controll row">
				<ControlGroupContainer controlTypeName="Position" 
																controlType={shape.position}
																shape={shape}
																handleShapeChange={this.props.handleShapeChange} />

				<ControlGroupContainer controlTypeName="Rotation" 
																controlType={shape.rotation}
																shape={shape}
																handleShapeChange={this.props.handleShapeChange} />

				<ControlGroupContainer controlTypeName="Scale" 
																controlType={shape.scale}
																shape={shape}
																handleShapeChange={this.props.handleShapeChange} />
			</div>
		);
	}
}

export default ShapeControl;
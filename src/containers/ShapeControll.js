import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ControllGroupContainer from './ControllGroupContainer';

class ShapeControll extends Component {

	// handleShapeChange(direction, controllTypeName, dimentionName) {
	// 	console.log('*** handleShapeChange:', direction, controllTypeName, dimentionName)
	// }

	render() {
		const { shape } = this.props;
		return (
			<div className="shape-controll row">
				<ControllGroupContainer controllTypeName="Position" 
																controllType={shape.position}
																shape={shape}
																handleShapeChange={this.props.handleShapeChange} />

				<ControllGroupContainer controllTypeName="Rotation" 
																controllType={shape.rotation}
																shape={shape}
																handleShapeChange={this.props.handleShapeChange} />

				<ControllGroupContainer controllTypeName="Scale" 
																controllType={shape.scale}
																shape={shape}
																handleShapeChange={this.props.handleShapeChange} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {

	}
}

export default ShapeControll;
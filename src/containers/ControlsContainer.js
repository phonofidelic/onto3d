import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ShapeControl from './ShapeControl';


class ControlsContainer extends Component {

	handleShapeChange(data) {
		console.log('*** handleShapeChange:', data);
		this.props.updateValue(data);
	}

	render() {
		const { shapeList, vrMode } = this.props;

		if (!vrMode) {
			return (
				<div className="controlls-container container">
					<div style={{height: '50px'}}>
						Controlls container
					</div>
					{ shapeList.map((shape, i) => {
						if (shape.selected) {
							return (
								<ShapeControl id={shape.id} shape={shape} handleShapeChange={this.handleShapeChange.bind(this)} key={i} />
							)
						} else {
							return null;
						}
					})}

				</div>
			);
		} else {
			return null;
		}
	}
}

const mapStateToProps = state => {
	// console.log('ControlsContainer, state:', state)
	return {
		shapeList: state.shapeListReducer.shapeList,
		vrMode: state.sceneReducer.vrMode
	}
}

export default connect(mapStateToProps, actions)(ControlsContainer);
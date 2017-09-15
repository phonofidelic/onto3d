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
		const { shapeList } = this.props;
		return (
			<div className="controlls-container container">
				<div style={{height: '50px'}}>
					Controlls container
					<span className="enter-vr-control"><button type="button" className="btn btn-default" onClick={() => {this.props.enterVr()}}>Enter VR</button></span>
				</div>
				{ shapeList.map((shape, i) => {
					if (shape.selected === true) {
						return (
							<ShapeControl id={shape.id} shape={shape} handleShapeChange={this.handleShapeChange.bind(this)} key={i} />
						)
					} else {
						return null;
					}
				})}

			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('ControlsContainer, state:', state)
	return {
		shapeList: state.shapeListReducer.shapeList
	}
}

export default connect(mapStateToProps, actions)(ControlsContainer);
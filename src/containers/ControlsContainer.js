import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { TextField } from 'material-ui';
import { Field, reduxForm } from 'redux-form';
import ShapeControl from './ShapeControl';

const form = reduxForm({
	form: 'controllInput'
});

class ControlsContainer extends Component {

	handleShapeChange(data) {
		console.log('*** handleShapeChange:', data);
		this.props.updateValue(data);
	}

	render() {
		const { shapeList } = this.props;
		return (
			<div className="controlls-container container">
				Controlls container
				{ shapeList.map((shape, i) => {
					if (shape.selected === true) {
						return (
							<ShapeControl id={shape.id} shape={shape} handleShapeChange={this.handleShapeChange.bind(this)} key={i} />
						)
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

export default connect(mapStateToProps, actions)(form(ControlsContainer));
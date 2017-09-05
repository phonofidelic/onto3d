import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { TextField } from 'material-ui';
import { Field, reduxForm } from 'redux-form';
import ControllsGroup from '../components/ControllsGroup';
import ShapeControll from './ShapeControll';

const form = reduxForm({
	form: 'controllInput'
});

class ControllsContainer extends Component {

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
							<ShapeControll id={shape.id} shape={shape} handleShapeChange={this.handleShapeChange.bind(this)} key={i} />
						)
					}
				})}
				
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('ControllsContainer, state:', state)
	return {
		shapeList: state.defaultReducer.shapeList
	}
}

export default connect(mapStateToProps, actions)(form(ControllsContainer));
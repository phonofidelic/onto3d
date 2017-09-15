import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import 'aframe';
import { Entity } from 'aframe-react';

class ShapeList extends Component {
	render() {
		const { shapeList } = this.props;
		if (shapeList.length) {
			console.log('*** shapeList:', shapeList)
			return (
				<Entity id="shape-list">
					{
						shapeList.map((shape, i) => {

							return (
								<Entity {...shape} key={i}>
									{console.log('*** shape:', shape)}
								</Entity>
							);
						})
					}
				</Entity>
			);
		}
	}
}

const mapStateToProps = state => {
	console.log('*** ShapeList, state:', state)
	return {
		shapeList: state.shapeListReducer.shapeList
	}
}

export default connect(mapStateToProps, actions)(ShapeList);
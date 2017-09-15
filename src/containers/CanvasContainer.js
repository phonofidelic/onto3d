import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ShapeList from './ShapeList';
const log = console.log;

class CanvasContainer extends Component {
	render() {
		const { shapeList } = this.props;
		return (
			<Scene className="scene-container" >

			            <Entity primitive="a-sky" color="#393939" />
			            <Entity primitive="a-cylinder" color="#CCC" rotation="0" position="0 -5 0" radius="30" height="0.1" />
			            <Entity primitive="a-light" type="point" position="0 3 0" />

			            <Entity id="camera"
			                    primitive="a-camera" />

			            <ShapeList />

	    </Scene>
		);
	}
}

const mapStateToProps = state => {
	log('*** CanvasContainer, state:', state)
	return {
		shapeList: state.shapeListReducer.shapeList
	}
}

export default connect(mapStateToProps, actions)(CanvasContainer);
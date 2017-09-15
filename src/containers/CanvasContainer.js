import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ShapeList from './ShapeList';

class CanvasContainer extends Component {

	handleEnterVr() {
		console.log('### ENTERED VR MODE ###')
		this.props.enterVr();
		// console.log('### vrMode:', this.props.vrMode)
	}

	render() {
		return (
			<Scene id="scene" 
						 className="scene-container"
						 events={{
						 	'enter-vr': this.handleEnterVr.bind(this),
						 	'exit-vr': this.handleEnterVr.bind(this)
						 }} >

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
	console.log('@ CanvasContainer, state:', state.sceneReducer)
	return {
		vrMode: state.sceneReducer.vrMode
	}
}

export default connect(mapStateToProps, actions)(CanvasContainer);
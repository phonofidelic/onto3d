import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ShapeList from './ShapeList';
import HudContainer from './HudContainer';
import * as utils from './utils'
const AFRAME = require('aframe');
const GamepadControls = require('aframe-gamepad-controls');
const ProxyControls = require('aframe-proxy-controls');
// const Gamepad = require('../lib/gamepad.js');

class CanvasContainer extends Component {

	componentDidMount() {
		console.log('* props:', this.props)
		console.log('componentDidMount', AFRAME)
		AFRAME.registerComponent('gamepad-controls', GamepadControls);
		AFRAME.registerComponent('proxy-controls', ProxyControls);

		
		// utils.initGamepad();
	}

	handleToggleVr() {
		console.log('### ENTERED VR MODE ###')
		this.props.toggleVr();
		// console.log('### vrMode:', this.props.vrMode)
	}		

	handleGamepadButtonDown(e) {
		console.log('*** gamepadbuttondown:', e.detail.index);

		// switch(e.detail.index) {
		// 	case 8:
		// 		this.props.toggleHud();
		// 		return;

		// 	default: return;
		// }

		if (e.detail.index === 8) {
			this.props.toggleVr(this.props.vrMode);
		}

		if (e.detail.index === 9) {
			this.props.toggleHud();
		}
	}

	render() {
		const { showHud } = this.props;
		return (
			<Scene id="scene" 
						 className="scene-container"
						 events={{
						 	'enter-vr': this.handleToggleVr.bind(this),
						 	'exit-vr': this.handleToggleVr.bind(this),
						 	'gamepadbuttondown': this.handleGamepadButtonDown.bind(this)
						 }}
						 proxy-controls="
						 	enabled: true;
	            debug: true;
	            pairCode: bajs-korv;
	            enableOverlay: true" >

        <Entity primitive="a-sky" color="#393939" />
        <Entity primitive="a-cylinder" color="#CCC" rotation="0" position="0 -5 0" radius="30" height="0.1" />
        
        <Entity id="user" gamepad-controls="controller: 0">
        	{ showHud && <HudContainer /> }
	        <Entity id="camera"
	                primitive="a-camera"
	                wasd-controls-enabled="true">
	          <Entity primitive="a-cursor" color="white" />
	          <Entity primitive="a-light" type="point" position="0 0 0" />
	        </Entity>
	       </Entity>

        <ShapeList />


	    </Scene>
		);
	}
}

const mapStateToProps = state => {
	// console.log('@ CanvasContainer, state:', state.sceneReducer)
	return {
		vrMode: state.sceneReducer.vrMode,
		showHud: state.sceneReducer.showHud
	}
}

export default connect(mapStateToProps, actions)(CanvasContainer);
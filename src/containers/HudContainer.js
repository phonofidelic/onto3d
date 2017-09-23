import React, { Component } from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

class HudContainer extends Component {

	renderMenu() {
		return (
			<Entity position="0 1.5 -1.3">
				<Entity primitive="a-plane"
	    					color="white"
	    					opacity="0.5"
	    					position="-1.1 0 0"
	    					width="0.5"
	    					height="0.5" >
	      	<Entity primitive="a-text"      					
	      					value="left"
	      					color="black"
	      					position="-0.2 0.2 0"
	      					width="1" 
	      					height="1" />
	      </Entity>

				<Entity primitive="a-plane"
	    					color="white"
	    					opacity="0.5"
	    					position="0 0 0"
	    					width="0.5"
	    					height="0.5" >
	      	<Entity primitive="a-text"      					
	      					value="middle"
	      					color="black"
	      					position="-0.2 0.2 0"
	      					width="1" 
	      					height="1" />
	      </Entity>

	      <Entity primitive="a-plane"
	    					color="white"
	    					opacity="0.5"
	    					position="1.1 0 0"
	    					width="0.5"
	    					height="0.5" >
	      	<Entity primitive="a-text"      					
	      					value="right"
	      					color="black"
	      					position="-0.2 0.2 0"
	      					width="1" 
	      					height="1" />
	      </Entity>
	     </Entity>
		);
	}


	renderCurve() {
		return (
			<Entity 
							geometry={{
								primitive: 'cylinder',
								openEnded: true,
								thetaLength: 180,
								thetaStart: 90,
								height: 1
							}}
							rotation="0 0 0"
							position=" 0 1.5 0"
							material="side: back; opacity: 0.5"
							color="white"
							opacity="0.5"
							radius="1.3">

			<Entity primitive="a-text"
							width="1"
							position="0 0 -1.2"
							value="Here is some text." />
		</Entity>
		);
	}

	render() {
		return (

    	<Entity>
    		{this.renderCurve()}
    	</Entity>
		);
	}
}

export default HudContainer;
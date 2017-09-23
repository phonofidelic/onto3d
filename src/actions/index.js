import { TOGGLE_VR,
				 UPDATE_POSITION,
				 UPDATE_ROTATION,
				 UPDATE_SCALE,
				 TOGGLE_HUD } from '../actiontypes';

const log = console.log;

export const toggleVr = (vrMode) => {	
	log('@ toggleVr')

	if (!vrMode) {
		document.querySelector('#scene').enterVR();
	} else {
		document.querySelector('#scene').exitVR();
	}

	return dispatch => {
		dispatch({
			type: TOGGLE_VR
		})
	}
}

export const updateValue = (data) => {
	/*
	data: {
		direction: (One of) 'inc' || 'dec',
		controlTypeName: (One of) 'Position' || 'Rotation' || 'Scale',
		dimentionName: (One of) 'x' || 'y' || 'z'
	}
	*/
	log('@ updateValue, \n    id:', data.id,
											'\n    direction:', data.direction, 
											'\n    controlTypeName:', data.controlTypeName, 
											'\n    dimention:', data.dimentionName
	);

	return dispatch => {

		switch(data.controlTypeName) {
			case 'Position':
				dispatch({
					type: UPDATE_POSITION,
					id: data.id,
					direction: data.direction,
					dimention: data.dimentionName
				})
				return;

			case 'Rotation':
				dispatch({
					type: UPDATE_ROTATION,
					id: data.id,
					direction: data.direction,
					dimention: data.dimentionName
				})
				return;

			case 'Scale':
				dispatch({
					type: UPDATE_SCALE,
					id: data.id,
					direction: data.direction,
					dimention: data.dimentionName
				})
				return;

			default: return;
		}
	}
}

export const toggleHud = () => {
	log('@ toggleHud')

	return dispatch => {
		dispatch({
			type: TOGGLE_HUD
		})
	}
}
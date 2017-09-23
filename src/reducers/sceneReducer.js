import { TOGGLE_VR, TOGGLE_HUD } from '../actiontypes';

const INITIAL_STATE = {
	vrMode: false,
	showHud: false
};

const sceneReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case TOGGLE_VR:
			return {
				...state,
				vrMode: !state.vrMode
			};

		case TOGGLE_HUD: 
			return {
				...state,
				showHud: !state.showHud
			};
		

		default: return state;
	}
};

export default sceneReducer;
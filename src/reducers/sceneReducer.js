import { ENTER_VR } from '../actiontypes';

const INITIAL_STATE = {
	vrMode: false
};

const sceneReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case ENTER_VR:
			return {
				...state,
				vrMode: !state.vrMode
			};

		default: return state;
	}
};

export default sceneReducer;
import { combineReducers } from 'redux';
import sceneReducer from './sceneReducer';
import shapeListReducer from './shapeListReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	sceneReducer: sceneReducer,
	shapeListReducer: shapeListReducer,
	form: formReducer
});

export default rootReducer;
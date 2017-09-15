import { combineReducers } from 'redux';
import shapeListReducer from './shapeListReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	shapeListReducer: shapeListReducer,
	form: formReducer
});

export default rootReducer;
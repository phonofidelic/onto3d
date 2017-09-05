import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	defaultReducer: defaultReducer,
	form: formReducer
});

export default rootReducer;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();


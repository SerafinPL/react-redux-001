import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultsReducer
});
//middleware
const logger = store => {
	return next =>{
		return action => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);
			console.log('[Middleware] next state', store.getState());
			return result;
		};
	};
};

const storeBox = createStore(rootReducer/*reducer*/, applyMiddleware(logger));

ReactDOM.render(
	<Provider store={storeBox}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './containers/App';
import reducer from './reducers';
import './index.scss';

// const middleware: any = [thunk];
// if (process.env.NODE_ENV !== 'production') {
// 	middleware.push(createLogger())
// }

const logger = createLogger();

const store = createStore(
	reducer,
	applyMiddleware(logger, thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
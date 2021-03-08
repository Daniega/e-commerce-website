import React from 'react';
import ReactDOM from 'react-dom';
//router
import { BrowserRouter } from 'react-router-dom';
//redux
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
//PWA - Progressive Web App - Service Worker
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();

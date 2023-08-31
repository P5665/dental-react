import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'typeface-montserrat';
import 'typeface-open-sans';
import './custom-theme.css';
import './styles/css/elegant-icons.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App className='App' />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

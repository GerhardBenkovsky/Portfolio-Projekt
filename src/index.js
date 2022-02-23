import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext';
import { MessageProvider } from './context/MessageContext';

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<MessageProvider>
				<App />
			</MessageProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

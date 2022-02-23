import React, { useContext, useState } from 'react';
import { useAuth } from './AuthContext';

const MessageContext = React.createContext();

export function useMessages() {
	return useContext(MessageContext);
}

export function MessageProvider({ children }) {
	const [messages, setMessages] = useState([]);
	const { user } = useAuth();

	function getMessages() {
		return messages;
	}

	function sendMessage(m) {
		const newMessage = {
			message: m,
			user,
		};
		setMessages((old) => [...old, newMessage]);
	}

	const value = { getMessages, sendMessage };

	return (
		<MessageContext.Provider value={value}>{children}</MessageContext.Provider>
	);
}

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

	function deleteMessage(m) {
		setMessages(messages.filter((item) => compareMessages(m, item)));
	}

	function compareMessages(m1, m2) {
		return !(
			JSON.stringify(m1.user) === JSON.stringify(m2.user) &&
			m1.message === m2.message &&
			JSON.stringify(user) === JSON.stringify(m1.user)
		);
	}

	const value = { getMessages, sendMessage, deleteMessage };

	return (
		<MessageContext.Provider value={value}>{children}</MessageContext.Provider>
	);
}

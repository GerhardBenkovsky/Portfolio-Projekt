import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useMessages } from '../context/MessageContext';

export default function ChatMessages() {
	const { user } = useAuth();
	const { getMessages } = useMessages();

	return (
		<Container className='flex-grow-1 '>
			<h2>ChatMessages</h2>
			{getMessages().map((m) => {
				const isFromUser = JSON.stringify(user) === JSON.stringify(m.user);
				return (
					<ChatMessage
						p_user={m.user}
						message={m.message}
						key={`${Math.random().toString(36).substring(2)}`}
						isFromUser={isFromUser}
					/>
				);
			})}
		</Container>
	);
}

function ChatMessage({ p_user, message, isFromUser }) {
	return (
		<div
			className={`d-flex justify-content-${
				isFromUser ? 'end' : 'start'
			} m-3 mt-0 mb-1`}>
			<div
				className={`bg-${
					isFromUser ? 'success' : 'dark'
				} text-light rounded p-2 `}
				style={{ maxWidth: '70%', wordBreak: 'break-all' }}>
				<b>{p_user.firstname}</b>
				<div>{message}</div>
			</div>
		</div>
	);
}

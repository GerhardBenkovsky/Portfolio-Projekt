import React from 'react';
import { Container } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useMessages } from '../context/MessageContext';

export default function ChatMessages() {
	const { user } = useAuth();
	const { getMessages } = useMessages();

	return (
		<Container className='flex-grow-1 overflow-auto'>
			<h2>ChatMessages</h2>
			{getMessages().map((m) => {
				const isFromUser = JSON.stringify(user) === JSON.stringify(m.user);
				return (
					<ChatMessage
						message={m}
						key={`${Math.random().toString(36).substring(2)}`}
						isFromUser={isFromUser}
					/>
				);
			})}
		</Container>
	);
}

function ChatMessage({ message, isFromUser }) {
	const { deleteMessage } = useMessages();

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
				<b>
					{message.user.firstname}{' '}
					<span onClick={() => deleteMessage(message)}>
						<FaTrash />
					</span>
				</b>
				<div>{message.message}</div>
			</div>
		</div>
	);
}

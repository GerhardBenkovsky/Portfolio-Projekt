import React from 'react';
import { ChatInput, ChatMessages } from '../components';
import { useAuth } from '../context/AuthContext';

export default function Forum() {
	const { user } = useAuth();
	return (
		<main className='flex-grow-1 d-flex	flex-column bg-secondary text-light'>
			<ChatMessages />
			<ChatInput />
		</main>
	);
}

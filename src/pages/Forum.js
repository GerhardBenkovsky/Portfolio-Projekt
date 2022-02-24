import React from 'react';
import { ChatInput, ChatMessages } from '../components';

export default function Forum() {
	return (
		<main className='flex-grow-1 d-flex	flex-column bg-secondary text-light overflow-hidden'>
			<ChatMessages />
			<ChatInput />
		</main>
	);
}

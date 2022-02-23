import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useMessages } from '../context/MessageContext';

export default function ChatInput() {
	const { sendMessage } = useMessages();
	const messageRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		sendMessage(messageRef.current.value);
		messageRef.current.value = '';
	}

	return (
		<div className='bg-dark w-100 d-flex justify-content-center'>
			<Form className='d-flex justify-content-evenly align-items-center p-3 w-75'>
				<Form.Group
					controlId='messageInput'
					className='bg-light text-dark flex-grow-1'>
					<Form.Control
						type='text'
						rows={2}
						placeholder='insert message'
						autoComplete='off'
						ref={messageRef}
					/>
				</Form.Group>

				<Button
					as='input'
					value='Send'
					background='primary'
					size='m'
					type='submit'
					onClick={handleSubmit}
					className='rounded-0'
				/>
			</Form>
		</div>
	);
}

import React, { useRef } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
	const emailRef = useRef();
	const firstnameRef = useRef();
	const surnameRef = useRef();
	const history = useHistory();
	const { login } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();
		console.log('Login');
		login(
			firstnameRef.current.value,
			surnameRef.current.value,
			emailRef.current.value
		);
		history.push(`/${firstnameRef.current.value}`);
	}

	return (
		<Container className='w-50'>
			<Card className='m-4 bg-dark text-light w-20'>
				<Card.Body>
					<h2 className='text-center mb-4'>Log In</h2>

					<Form onSubmit={handleSubmit}>
						<Form.Group id='first name'>
							<Form.Label>first name</Form.Label>
							<Form.Control
								type='text'
								className=' bg-light'
								ref={firstnameRef}
								required
							/>
						</Form.Group>

						<Form.Group id='surname'>
							<Form.Label>surname</Form.Label>
							<Form.Control
								type='text'
								className=' bg-light'
								ref={surnameRef}
								required
							/>
						</Form.Group>

						<Form.Group id='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								className=' bg-light'
								ref={emailRef}
								required
							/>
						</Form.Group>

						<Button className='w-100 mt-3' type='submit'>
							Log In
						</Button>
					</Form>

					{/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
				</Card.Body>
			</Card>
		</Container>
	);
}

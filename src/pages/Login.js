import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Card, Alert, Stack } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Login = () => {
	const emailRef = useRef();
	const firstnameRef = useRef();
	const surnameRef = useRef();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const { login } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();
		console.log('Login');
		login(
			emailRef.current.value,
			firstnameRef.current.value,
			surnameRef.current.value
		);
		history.push('/');
	}

	return (
		<div style={{ width: '50vw' }}>
			<Card className='m-4 text-primary'>
				<Card.Body>
					<h2 className='text-center mb-4'>Log In</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
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

						<Button disabled={loading} className='w-100 mt-3' type='submit'>
							Log In
						</Button>
					</Form>

					{/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
				</Card.Body>
			</Card>

			<div className='w-100 text-center mt-2'>
				Need an account? <Link to='/signup'>Sign Up</Link>
			</div>
		</div>
	);
};

export default Login;

import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navigation() {
	const { user, signOut } = useAuth();
	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Container>
				<Navbar.Brand>Portofolio Projekt</Navbar.Brand>
				<Nav className='me-auto'>
					<Navbar.Text>
						<NavLink to={`/${user.firstname}`} className='text-decoration-none'>
							Forum
						</NavLink>
					</Navbar.Text>
				</Nav>
				<Nav>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Navbar.Text>
							<Nav.Link disabled className='text-light'>
								Signed in as {user.firstname} {user.surname}
							</Nav.Link>
						</Navbar.Text>
					</Navbar.Collapse>
					<Navbar.Text>
						<Button variant='danger' onClick={signOut}>
							Sign Out
						</Button>
					</Navbar.Text>
				</Nav>
			</Container>
		</Navbar>
	);
}

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { Navigation, PrivateRoute } from './components';
import { ROUTES } from './constants/routes';
import { useAuth } from './context/AuthContext';
import { Forum, Login } from './pages';

export default function App() {
	const { user } = useAuth();
	return (
		<>
			<Router>
				{user && <Navigation />}
				<Switch>
					<Route exact path={ROUTES.LOGIN} component={Login} />
					<PrivateRoute exact path={ROUTES.FORUM} component={Forum} />
					<Route
						path='/'
						component={() => <Redirect to={`/${user.firstname}`} />}
					/>
				</Switch>
			</Router>
		</>
	);
}

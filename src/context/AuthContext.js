import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState({
		firstname: 'xx',
		surname: 'xx',
		email: 'xx',
	}); //"xx","xx","xx" soll null sein

	const login = (firstname, surname, email) => {
		setUser({ firstname, surname, email });
	};

	const value = { login, user };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

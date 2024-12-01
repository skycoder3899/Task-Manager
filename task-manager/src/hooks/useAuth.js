import { useEffect, useState } from "react";
import { LOGIN_MUTATION, LOGOUT_MUTATION } from '../graphql/mutations';


export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  const login = async (username, password) => {
    const response = await fetch('http://localhost:4000', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: LOGIN_MUTATION,
        variables: { username, password },
      }),
    });

    const data = await response.json();
    if (data?.data?.login) {
      const token = data.data.login;
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      return token;
    }
    throw new Error('Login failed');
  };

  const logout = async () => {
    if (!token) return;

    await fetch('http://localhost:4000', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({ query: LOGOUT_MUTATION }),
    });

    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

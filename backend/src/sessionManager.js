const sessions = new Map();
const { v4: uuidv4 } = require('uuid');

const sessionTimeout = 30 * 60 * 1000; 

function createSession(username) {
    const token = uuidv4();
    sessions.set(token, { username, lastActive: Date.now() });
    return token;
}

function validateSession(token) {
    const session = sessions.get(token);
    if (!session || Date.now() - session.lastActive > sessionTimeout) {
        sessions.delete(token);
        throw new Error('Session expired or invalid.');
    }
    session.lastActive = Date.now();
}

function destroySession(token) {
    return sessions.delete(token);
}

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user', password: 'pass' }
];

module.exports = {
    login: (username, password) => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            return createSession(username);
        }
        throw new Error('Invalid credentials');
    },
    logout: (token) => destroySession(token),
    validateSession,
};

# Backend Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ./backend/package.json ./

# Install dependencies
RUN npm install

# Copy the backend source code
COPY ./backend .

# Expose the backend server port
EXPOSE 4000

# Start the backend server
CMD ["npm", "start"]

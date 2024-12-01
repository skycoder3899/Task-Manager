# Frontend Dockerfile
FROM node:18-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ./task-manager/package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source code
COPY ./task-manager .

# Build the frontend
RUN npm run build

# Serve the frontend using Nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

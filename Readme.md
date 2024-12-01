# Task Manager

This project includes both the **Backend** and **Frontend** services, packaged in Docker containers. The backend exposes a GraphQL API, while the frontend is a React-based user interface. Docker Compose is used to manage and orchestrate the services.

## Project Structure

```
.
├── backend/
│   ├── Dockerfile
│   ├── src/
│   ├── package.json
│   └── ... (Other backend files)
├── frontend/
│   ├── Dockerfile
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ... (Other frontend files)
├── docker-compose.yml
└── README.md
```

## Prerequisites

To run the project, you'll need the following tools installed on your local machine:

- **Docker** (Ensure Docker Desktop or Docker Engine is installed)
- **Docker Compose** (Usually bundled with Docker Desktop)
- **Node.js** (Optional, but for local development or debugging)

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/skycoder3899/Task-Manager.git
cd Task-Manager
```

### 2. Use Docker Compose to Build All Services

From the project root directory, run:

```bash
docker-compose build
```

### 3. Running the Application

To start the services, run:

```bash
docker-compose up
```

This will start both the **backend** and **frontend** services as containers. The backend API should now be accessible at `http://localhost:4000` and the frontend at `http://localhost:5173` (default ports).

### 4. Stopping the Application

To stop the application, run:

```bash
docker-compose down
```

### 5. Accessing Logs

To view logs for a specific service, use:

```bash
docker-compose logs <service-name>
```

For example, to view the logs of the backend:

```bash
docker-compose logs backend
```
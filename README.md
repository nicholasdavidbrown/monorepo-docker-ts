# Nextbook - React and NestJS Monorepo with PostgreSQL deployed via Docker

## Installation

### Pre-requisites

- Install Node.js.
- Install Nest.js CLI.
- Install Docker & Docker Compose.
- Install Make.

### Steps

1. Clone the repository.

2. Setup local `.env` file.

```
NODE_ENV=development
FRONTEND_PORT=3000
BACKEND_PORT=3002
JWT_SECRET=jwt_secret_key_here
JWT_EXPIRES_IN=30d
DB_HOST=db
DB_NAME=postgres
DB_USER=admin
DB_PASSWORD=root
DB_PORT=5432
PGADMIN_DEFAULT_EMAIL=admin@backend.com
PGADMIN_DEFAULT_PASSWORD=root
PGADMIN_PORT=5055
```

3. Run `docker compose watch` to run the docker-compose and start containers in development mode.

4. Navigate to the PGAdmin dashboard and create a new server with the credentials and DB name (hostname) set in the environment.

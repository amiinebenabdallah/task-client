# Task App Client

A Next.js-based task management application client.

## Prerequisites

- Docker
- Docker Compose
- Make (optional, for using Makefile commands)

## Getting Started

### Using Docker (Recommended)

1. Build the containers:
```bash
docker-compose build
```

2. Start the application:
```bash
docker-compose up -d
```

The application will be available at `http://localhost:3000`

### Using Make Commands

For convenience, you can use the following make commands:

- `make build` - Build Docker containers
- `make up` - Start containers in detached mode
- `make down` - Stop and remove containers
- `make logs` - View container logs
- `make clean` - Remove containers and clean up
- `make help` - Show all available commands

### Manual Setup (Development)

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Project Structure

```
.
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── Makefile           # Make commands for common operations
└── README.md          # Project documentation
```

## Environment Variables

The following environment variables are used:

- `NODE_ENV` - Set to 'production' in Docker environment
- `PORT` - Set to 3000 by default
- `HOSTNAME` - Set to "0.0.0.0" for Docker compatibility

## Docker Configuration

The project uses a multi-stage Docker build process:

1. Base stage with Node.js 18 Alpine
2. Dependencies installation stage
3. Build stage
4. Production runner stage

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

# Task App Client

A Next.js-based task management application client.

## Prerequisites

- Docker
- Docker Compose
- Make (optional, for using Makefile commands)

## Deployment

The application is deployed and accessible at:
- Production URL: [https://task-client-mu.vercel.app/](https://task-client-mu.vercel.app/)

The deployment is handled by Vercel, which provides:
- Automatic HTTPS
- Global CDN
- Continuous Deployment
- Serverless Functions
- Edge Network

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
```

2. Run the development server:
```bash
npm run dev
```

## Project Structure

```
.
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── Makefile           # Make commands for common operations
└── README.md          # Project documentation
```


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

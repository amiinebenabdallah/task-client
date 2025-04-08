.PHONY: build up down logs clean help

help:
	@echo "Available commands:"
	@echo "  make build    - Build Docker containers"
	@echo "  make up       - Start containers in detached mode"
	@echo "  make down     - Stop and remove containers"
	@echo "  make logs     - View container logs"
	@echo "  make clean    - Remove containers and clean up"
	@echo "  make help     - Show this help message"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

clean:
	docker-compose down -v
	docker system prune -f 
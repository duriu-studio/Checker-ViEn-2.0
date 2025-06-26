# Checker Viet Hai Cham Khong

A NestJS application built with TypeScript and PostgreSQL following best practices for API development.

## Features

- **NestJS Framework**: Built with the latest NestJS framework
- **TypeScript**: Full TypeScript support with strict type checking
- **PostgreSQL**: Database integration with TypeORM
- **Swagger/OpenAPI**: Automatic API documentation
- **Validation**: Request validation using class-validator
- **Configuration**: Environment-based configuration
- **Modular Architecture**: Clean, maintainable code structure

## Project Structure

```
src/
├── common/                 # Shared utilities and components
│   ├── decorators/        # Custom decorators
│   ├── dto/              # Common DTOs
│   ├── filters/          # Exception filters
│   ├── guards/           # Authentication guards
│   ├── interceptors/     # Response interceptors
│   ├── interfaces/       # Common interfaces
│   └── pipes/            # Validation pipes
├── config/               # Configuration files
├── database/             # Database-related files
│   ├── migrations/       # Database migrations
│   └── seeds/           # Database seeds
├── modules/              # Feature modules
│   └── users/           # User management module
│       ├── dto/         # User DTOs
│       ├── entities/    # User entities
│       ├── users.controller.ts
│       ├── users.service.ts
│       └── users.module.ts
├── app.controller.ts     # Main application controller
├── app.module.ts         # Main application module
├── app.service.ts        # Main application service
└── main.ts              # Application entry point
```

## Installation

```bash
$ npm install
```

## Configuration

1. Copy the environment example file:
```bash
$ cp .env.example .env
```

2. Update the `.env` file with your database credentials:
```env
NODE_ENV=development
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=checker_viet_hai_cham_khong
```

## Running the Application

```bash
# Development
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## API Documentation

Once the application is running, you can access the Swagger documentation at:
```
http://localhost:3000/api
```

## Testing

```bash
# Unit tests
$ npm run test

# E2E tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```

## Database

This application uses PostgreSQL with TypeORM. Make sure you have PostgreSQL installed and running.

### Running Migrations

```bash
# Generate migration
$ npm run typeorm:generate-migration MigrationName

# Run migrations
$ npm run typeorm:run-migrations

# Revert migration
$ npm run typeorm:revert-migration
```

## Architecture

### Modules
- Each feature is organized as a separate module
- Modules are self-contained with their own controllers, services, and DTOs
- Common functionality is shared through the `common` directory

### Configuration
- Environment-based configuration using `@nestjs/config`
- Centralized configuration files in the `config` directory

### Validation
- Request validation using `class-validator` decorators
- Custom validation pipes for specific requirements

### Error Handling
- Global exception filters for consistent error responses
- Custom exception types for different error scenarios

### API Documentation
- Automatic Swagger documentation generation
- API decorators for detailed endpoint documentation

## Development Guidelines

- Follow NestJS conventions and best practices
- Use TypeScript strict mode
- Implement proper error handling
- Add Swagger documentation for all endpoints
- Write unit tests for services and controllers
- Use dependency injection for better testability

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

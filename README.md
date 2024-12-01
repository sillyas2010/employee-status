# Employee Status Management

A web application for managing employee statuses and information. The application provides functionality to view, filter, and create employee records with a modern, responsive interface.

## Features

- View employee list with detailed information
- Filter employees by various criteria
- Create new employee records
- Responsive design for desktop and mobile devices

## Tech Stack

- **Frontend:**

  - React 18
  - TypeScript
  - Tailwind CSS
  - React Aria (for accessibility)
  - Vite (build tool)

- **Backend:**
  - Express.js
  - Node.js (v22.10.0+)

## Getting Started

### Prerequisites

- Node.js (version 22.10.0 or higher)
- Yarn package manager

### Development

To run the application in development mode with hot reload:

```bash
yarn dev
```

This will start both the client and server in development mode concurrently.

### Production

To build and run the application for production:

```bash
yarn start
```

This command will:

1. Build the client-side application
2. Build the server-side application
3. Start the production server

## Building Separately

- Build client: `yarn build:client`
- Build server: `yarn build:server`
- Build both: `yarn build`

## Available Scripts

- `yarn dev` - Start development server with hot reload
- `yarn start` - Build and start production server
- `yarn build` - Build both client and server
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn test` - Run tests

## Development Tools

- **TypeScript** - For type safety and better developer experience
- **ESLint** - For code linting
- **Prettier** - For code formatting
- **Vitest** - For testing
- **Tailwind CSS** - For styling
- **Concurrently** - For running multiple scripts simultaneously

## Requirements

The application requires Node.js version 22.10.0 or higher, as specified in the project's engines configuration. Make sure you have the correct Node.js version installed before running the application.

## Contributing

1. Ensure you have the correct Node.js version installed
2. Install dependencies using `yarn install`
3. Create a new branch for your feature
4. Make your changes
5. Run tests and ensure linting passes
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

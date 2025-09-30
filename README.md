# Vite-React-Express-Boilerplate

A simple and fast boilerplate to get started with **Vite**, **React**, and **Express**. This project structure is designed to help you quickly develop full-stack applications using modern tools, providing both frontend and backend environments out of the box.

This boilerplate sets up:

- **Vite** for blazing-fast React development
- **React** for building dynamic and interactive UIs
- **Express** as the backend server to handle API requests

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org) (v22 recommended with vite)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### Clone, Install & Run

#### 1. Clone the repo
```bash
git clone https://github.com/CainWasSlain/Vite-React-Express-Boilerplate
cd vite-react-express-boilerplate
```

#### 2. Install dependencies for both frontend and backend
```bash
npm run superinstall
```

#### 3. Copy example .env files
```bash
cp app/frontend/.env.example app/frontend/.env
cp app/backend/.env.example app/backend/.env
```

#### 4. Edit the .env files with your config

##### On Windows:
```bash
notepad app/frontend/.env
notepad app/backend/.env
```

##### On Linux/macOS:
```bash
vim app/frontend/.env
vim app/backend/.env
```

#### 5. Start development servers (frontend + backend)
```bash
npm run dev
```
---

### Running the project 

#### Development Mode
```bash
npm run dev
```

#### Backend Only
```bash
npm run dev:backend
```

#### Frontend Only
```bash
npm run dev:frontend
```

#### Build for production
```bash
npm run build
```

#### Start production server(Run only after build)
```bash
npm start
```

---

## 🛠️ Useful Tools for Development

Enhance your workflow with these handy tools:

- **[Visual Studio Code](https://code.visualstudio.com/)**  
  A powerful, extensible code editor with great support for JavaScript, React, and Node.js.

- **[nvm (Node Version Manager)](https://github.com/nvm-sh/nvm)**  
  A tool that allows you to install and switch between multiple Node.js versions easily.

- **[Postman](https://www.postman.com/downloads/)**  
  A versatile API client to design, test, and debug your backend endpoints effortlessly.

- **[Docker](https://www.docker.com/get-started/)**  
  Container platform to package your application and dependencies for consistent deployment.

- **[Insomnia](https://insomnia.rest/download)**  
  Another popular API client for testing REST and GraphQL APIs with an intuitive UI.

- **[React Developer Tools](https://reactjs.org/link/react-devtools)**  
  Browser extension for inspecting and debugging React component hierarchies.


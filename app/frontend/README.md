# React + Vite

This template provides a minimal and efficient setup to get **React** running smoothly with **Vite**, featuring fast hot module replacement (HMR) for instant updates during development, and some basic ESLint rules to help catch errors early.

---

## Available React Plugins for Vite

There are two official Vite plugins to enable React Fast Refresh (live updates without losing component state):

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)**  
  Uses **Babel** under the hood. A stable, widely used JavaScript compiler that supports many features and plugins.

- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)**  
  Uses **SWC**, a newer Rust-based compiler that’s extremely fast and efficient.

Both enable smooth React development with hot reloading, so you can choose based on your preference or project needs.

---

## React Compiler (Experimental)

The **React Compiler** (a new approach for compiling React code) is **not enabled** by default in this template.  
If you want to try it out or learn more, check the official docs here: [React Compiler Installation](https://react.dev/learn/react-compiler/installation).

---

## Improving Your ESLint Setup

While this template comes with some basic ESLint rules, if you’re building a production application, we highly recommend:

- Using **TypeScript** to add type safety.
- Configuring ESLint with **type-aware rules** via [`typescript-eslint`](https://typescript-eslint.io), which helps catch more subtle bugs and enforces best practices.

For an example setup, check out the official Vite TypeScript React template:  
[React + TypeScript Vite Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

---

## Important: Environment Variables (`.env` files)

Many applications require configuration variables like API URLs, ports, feature flags, and other environment-specific settings.  
This is done using **environment variable files** (`.env`) in your frontend and backend projects.

- These files **should not be committed** to version control if they contain secrets.
- They allow your app to be configured differently depending on the environment (development, production, testing, etc.).
- Common uses include setting API endpoints, server ports, keys, and other parameters without changing the source code.

> Please refer to the **root README** file in this project for detailed instructions on how to set up and manage your `.env` files properly.

---

If you’re new to React, Vite, or environment configuration, following these steps carefully will help you build scalable and maintainable applications!

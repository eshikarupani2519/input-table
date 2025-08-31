# input-table
This project is a React 19 + Vite 7 + Tailwind CSS application with form validation and table features. It includes components like InputField with error and helper messages, a table with sorting, loading, and empty states, row selection (single and multiple), and support for light and dark mode through props. Storybook is integrated for component development and documentation, while Vitest, React Testing Library, Playwright, and jest-axe are set up for testing. ESLint and TypeScript are used for code quality and type safety.

Features:

Form with email and password validation

Reusable InputField component with helper and error messages

Table with sorting, loading state, empty state

Single and multiple row selection

Light and dark mode support

Storybook integration for components

Testing setup with Vitest, RTL, Playwright, jest-axe

ESLint and TypeScript for clean code

Tech stack:

React, Vite, TypeScript

Tailwind CSS, clsx, lucide-react, heroicons

Storybook

Vitest, React Testing Library, Playwright

ESLint

Setup instructions:

Install dependencies
npm install

Start development server
npm run dev

Runs at http://localhost:5173

Start Storybook
npm run storybook

Runs at http://localhost:6006

Build for production
npm run build
npm run preview

Lint code
npm run lint

Run tests
npx vitest

For browser mode:
npx vitest --browser

Project structure:

src/components : reusable UI components (InputField, Table etc)

src/stories : storybook stories

App.tsx : root component

main.tsx : entry point

tailwind.config.js : Tailwind config

postcss.config.js : PostCSS config

tsconfig.json : TypeScript config

.eslintrc : ESLint config

This project demonstrates component-driven development with Storybook, form handling, table UI, theme support, testing, and modern frontend tooling.

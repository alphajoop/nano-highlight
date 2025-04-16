# Contributing to nano-highlight

Thank you for your interest in contributing to nano-highlight! This document provides guidelines and instructions for contributing to this lightweight syntax highlighting library.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Adding a New Language](#adding-a-new-language)
- [Adding a New Theme](#adding-a-new-theme)
- [Coding Standards](#coding-standards)
- [Testing](#testing)

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Be respectful and inclusive
- Be patient and welcoming
- Be thoughtful
- Be collaborative
- When disagreeing, try to understand why

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/nano-highlight.git`
3. Install dependencies: `pnpm install`
4. Create a new branch for your contribution (see branch naming convention below)

## Development Workflow

### Branch Naming Convention

Branches must follow the format: `<type>/<description>`

Valid types:

- `feat` or `feature`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or fixing tests
- `chore`: Changes to the build process or auxiliary tools
- `revert`: Revert a previous commit

Example: `feat/add-ruby-support`

### Commit Message Convention

Commits must follow the format: `<type>(<scope>): <description>`

Example: `feat(languages): add Ruby language support`

## Pull Request Process

1. Create a branch with the correct naming convention
2. Make your changes
3. Ensure your code passes all tests: `pnpm test`
4. Ensure your code follows the coding standards: `pnpm run lint`
5. Push your branch to your fork
6. Create a pull request to the main repository
7. Fill in the pull request template with details about your changes

## Adding a New Language

To add support for a new programming language:

1. Create a new file in `src/languages/` named after the language (e.g., `ruby.ts`)
2. Define the language rules following the `Language` interface
3. Export the language definition as the default export
4. Update `src/languages/index.ts` to include your new language
5. Add examples to the demo to showcase the language highlighting
6. Add appropriate tests

Example language definition:

```typescript
import { Language } from '../types';

const newLanguage: Language = {
  name: 'languageName',
  rules: [
    { type: 'comment', pattern: /\/\/.*$/gm },
    // Add more rules here
  ],
};

export default newLanguage;
```

## Adding a New Theme

To add a new theme:

1. Create a new file in `src/themes/` named after the theme (e.g., `monokai.ts`)
2. Define the theme following the `Theme` interface
3. Export the theme definition as the default export
4. Update `src/themes/index.ts` to include your new theme

## Coding Standards

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused on a single task

## Testing

- Write tests for all new features or bug fixes
- Run tests before submitting a pull request: `pnpm test`
- Ensure test coverage remains high

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

### Automated Workflows

1. **CI Pipeline** - Runs on every push and pull request:

   - Linting: Ensures code follows style guidelines
   - Testing: Runs all tests to verify functionality
   - Building: Compiles the project to verify it builds correctly

2. **Release Pipeline** - Runs when a new version tag is pushed:
   - Creates a GitHub Release with changelog
   - Publishes the package to npm
   - Deploys the demo to GitHub Pages

### How It Works

- All pull requests must pass the CI pipeline before they can be merged
- The main branch is protected and requires CI checks to pass
- When a new version is ready, tag the commit with `v*.*.*` (following semantic versioning) to trigger a release

### Local Verification

Before submitting a PR, you can run the same checks locally:

```bash
# Run linting
pnpm run lint

# Run tests
pnpm test

# Build the project
pnpm run build
```

Thank you for contributing to nano-highlight!

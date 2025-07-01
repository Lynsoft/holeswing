# Golf Field App

A React Native application built with Expo for managing golf field operations.

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd golf-field-app

# Install dependencies
pnpm install

# Start the development server
pnpm start
```

## 📱 Development

### Available Scripts

- `pnpm start` - Start Expo development server
- `pnpm ios` - Run on iOS simulator
- `pnpm android` - Run on Android emulator
- `pnpm web` - Run on web browser

### Code Quality

- `pnpm lint` - Check code quality with Biome
- `pnpm lint:fix` - Fix linting issues with Biome
- `pnpm format` - Format code with Biome
- `pnpm type-check` - Run TypeScript type checking
- `pnpm quality` - Run all quality checks (type-check + lint)
- `pnpm quality:fix` - Fix linting issues and run type check

### Building

- `pnpm build:dev` - Build development version
- `pnpm build:preview` - Build preview version
- `pnpm build:prod` - Build production version

### Release Management

- `pnpm release` - Interactive release with release-it
- `pnpm release:patch` - Patch release (1.0.0 → 1.0.1)
- `pnpm release:minor` - Minor release (1.0.0 → 1.1.0)
- `pnpm release:major` - Major release (1.0.0 → 2.0.0)
- `pnpm release:dry` - Preview release changes
- `pnpm standard-version` - Automated release based on commits

See [RELEASE.md](./RELEASE.md) for detailed release management guide.

## 🛠️ Development Workflow

This project uses a comprehensive development workflow with automated code quality enforcement:

### Code Quality Tools

- **Biome**: Fast formatter and linter for JavaScript/TypeScript (replaces ESLint + Prettier)
- **TypeScript**: Static type checking
- **Husky**: Git hooks for pre-commit and pre-push quality checks
- **lint-staged**: Run linters on staged files only

### Git Hooks

- **Pre-commit**: Runs Biome formatting and linting on staged files
- **Pre-push**: Runs TypeScript checking and full Biome validation
- **Commit-msg**: Validates commit messages follow conventional format

### Commit Message Format

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Other changes

**Examples:**
```
feat: add user authentication
fix: resolve navigation issue on Android
docs: update installation instructions
```

### Changelog

The project automatically generates changelogs based on conventional commits:

- `pnpm changelog` - Generate changelog for new commits
- `pnpm changelog:first` - Generate initial changelog

## 🔧 Configuration

### Biome Configuration

Code formatting and linting rules are configured in `biome.json`. The configuration includes:

- 2-space indentation
- Single quotes
- 100 character line width
- ES5 trailing commas
- Import organization
- React-specific rules

### TypeScript

TypeScript configuration is in `tsconfig.json` with strict mode enabled.

## 🚀 CI/CD

### GitHub Actions

The project includes automated workflows:

- **CI**: Runs on PRs and pushes to main/develop
  - Code quality checks (Biome)
  - TypeScript validation
  - Build verification
  - Test execution (when available)

- **Release**: Triggered on version tags
  - Generates changelog
  - Creates GitHub release
  - Builds and optionally deploys

- **Dependabot**: Automated dependency updates
  - Weekly dependency checks
  - Auto-merge for passing checks

### Deployment

The project is configured for web deployment via GitHub Pages on releases.

## 📚 Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Styling**: Tailwind CSS (NativeWind)
- **Navigation**: Expo Router
- **State Management**: Zustand
- **Backend**: Supabase
- **Development**: Biome, Husky, Conventional Commits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Make your changes following the code quality standards
4. Commit using conventional format: `git commit -m "feat: add amazing feature"`
5. Push to your branch: `git push origin feat/amazing-feature`
6. Open a Pull Request

The pre-commit hooks will automatically format your code and validate commit messages.

## 📄 License

This project is private and proprietary.

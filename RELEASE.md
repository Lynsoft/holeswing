# Release Management Guide

This document outlines the release management process for the Golf Field App.

## 🚀 Release Tools

The project uses multiple release management tools to provide flexibility:

### 1. **release-it** (Recommended)
Interactive release tool with GitHub integration.

### 2. **standard-version**
Automated versioning based on conventional commits.

### 3. **GitHub Actions**
Automated releases triggered by commits or manual dispatch.

## 📋 Release Types

### Semantic Versioning
We follow [Semantic Versioning](https://semver.org/):
- **MAJOR** (X.0.0): Breaking changes
- **MINOR** (0.X.0): New features (backward compatible)
- **PATCH** (0.0.X): Bug fixes (backward compatible)

### Pre-release Versions
- **alpha**: Early development versions
- **beta**: Feature-complete, testing versions
- **rc**: Release candidates

## 🛠️ Release Methods

### Method 1: Interactive Release (release-it)

```bash
# Interactive release (prompts for version)
pnpm run release

# Specific version bumps
pnpm run release:patch    # 1.0.0 → 1.0.1
pnpm run release:minor    # 1.0.0 → 1.1.0
pnpm run release:major    # 1.0.0 → 2.0.0

# Pre-releases
pnpm run release:alpha    # 1.0.0 → 1.0.1-alpha.0
pnpm run release:beta     # 1.0.0 → 1.0.1-beta.0
pnpm run release:rc       # 1.0.0 → 1.0.1-rc.0

# Dry run (preview changes)
pnpm run release:dry
```

### Method 2: Automated Release (standard-version)

```bash
# Automatic version based on commits
pnpm run standard-version

# Specific version bumps
pnpm run standard-version:patch
pnpm run standard-version:minor
pnpm run standard-version:major

# Dry run
pnpm run standard-version:dry
```

### Method 3: GitHub Actions

#### Automatic Releases
- **Trigger**: Push to `main` branch
- **Condition**: Contains `feat:` or `fix:` commits
- **Process**: Analyzes commits and creates appropriate release

#### Manual Releases
- **Trigger**: GitHub Actions → "Release" workflow → "Run workflow"
- **Options**: Choose release type (patch/minor/major/prerelease)
- **Process**: Interactive release with full control

## 📝 Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Examples:
```bash
# Patch release
git commit -m "fix: resolve navigation issue on Android"

# Minor release  
git commit -m "feat: add user authentication system"

# Major release
git commit -m "feat!: redesign API endpoints

BREAKING CHANGE: API endpoints have been restructured"
```

## 🔄 Release Process

### Pre-Release Checklist
- [ ] All tests pass (`pnpm run quality`)
- [ ] Code is properly formatted (`pnpm run format`)
- [ ] Documentation is updated
- [ ] Breaking changes are documented
- [ ] Feature flags are properly set

### Release Steps

1. **Prepare Release**
   ```bash
   # Ensure clean working directory
   git status
   
   # Pull latest changes
   git pull origin main
   
   # Run quality checks
   pnpm run quality
   ```

2. **Create Release**
   ```bash
   # Option A: Interactive release
   pnpm run release
   
   # Option B: Automated release
   pnpm run standard-version
   
   # Option C: Use GitHub Actions
   # Go to Actions → Release → Run workflow
   ```

3. **Verify Release**
   - Check GitHub Releases page
   - Verify CHANGELOG.md is updated
   - Confirm tags are pushed
   - Test deployed version

### Post-Release
- [ ] Announce release in team channels
- [ ] Update documentation if needed
- [ ] Monitor for issues
- [ ] Plan next release cycle

## 🔧 Configuration Files

### `.release-it.json`
Configuration for release-it tool:
- Git settings (commit messages, tags)
- GitHub release settings
- Hooks for quality checks
- Changelog generation

### `.versionrc.json`
Configuration for standard-version:
- Commit types and sections
- URL formats for links
- Custom scripts

## 🚨 Troubleshooting

### Common Issues

1. **"Working directory not clean"**
   ```bash
   git status
   git add .
   git commit -m "chore: prepare for release"
   ```

2. **"No commits since last release"**
   - Make sure you have new commits
   - Check if you're on the correct branch

3. **"GitHub token not found"**
   - Ensure GITHUB_TOKEN is set in environment
   - For local releases, create a personal access token

4. **"Quality checks failed"**
   ```bash
   pnpm run quality:fix
   git add .
   git commit -m "fix: resolve quality issues"
   ```

### Emergency Hotfix Process

1. Create hotfix branch from latest tag:
   ```bash
   git checkout -b hotfix/critical-fix v1.2.3
   ```

2. Make minimal fix and commit:
   ```bash
   git commit -m "fix: critical security issue"
   ```

3. Release hotfix:
   ```bash
   pnpm run release:patch
   ```

4. Merge back to main:
   ```bash
   git checkout main
   git merge hotfix/critical-fix
   git push origin main
   ```

## 📊 Release Analytics

Track release metrics:
- Release frequency
- Time between releases
- Issue resolution time
- Feature delivery time

Use GitHub Insights and release notes to monitor project health.

## 🎯 Best Practices

1. **Regular Releases**: Aim for frequent, small releases
2. **Clear Communication**: Write descriptive commit messages
3. **Quality First**: Never skip quality checks
4. **Documentation**: Keep CHANGELOG.md updated
5. **Testing**: Test releases in staging environment
6. **Rollback Plan**: Always have a rollback strategy

## 📚 Resources

- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [release-it Documentation](https://github.com/release-it/release-it)
- [standard-version Documentation](https://github.com/conventional-changelog/standard-version)

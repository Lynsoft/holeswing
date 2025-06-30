# Pull Request

## 📱 Description
<!-- Provide a brief description of the changes in this PR -->

### What does this PR do?
<!-- Describe the main purpose and functionality of this PR -->

### Why is this change needed?
<!-- Explain the motivation behind this change -->

## 🔄 Type of Change
<!-- Mark the relevant option with an "x" -->

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI changes
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvements
- [ ] 🧪 Test additions or updates
- [ ] 🔧 Build/CI changes
- [ ] 🔒 Security improvements

## 📱 Mobile Platform Testing
<!-- Mark all platforms where this change has been tested -->

- [ ] 📱 iOS Simulator
- [ ] 🤖 Android Emulator
- [ ] 🌐 Web Browser (Expo Web)
- [ ] 📱 iOS Physical Device
- [ ] 🤖 Android Physical Device

## 🧪 Testing
<!-- Describe how you tested your changes -->

### Test Cases
<!-- List the test cases you've verified -->

- [ ] Feature works as expected
- [ ] No regression in existing functionality
- [ ] UI/UX is consistent across platforms
- [ ] Performance is acceptable
- [ ] Accessibility is maintained

### Manual Testing Steps
<!-- Provide step-by-step instructions for manual testing -->

1. 
2. 
3. 

## 📸 Screenshots/Videos
<!-- Add screenshots or videos demonstrating the changes, especially for UI changes -->

### Before
<!-- Screenshots/videos of the current state -->

### After
<!-- Screenshots/videos of the new state -->

## 🔗 Related Issues
<!-- Link to related issues using keywords like "Fixes", "Closes", "Resolves" -->

- Fixes #
- Closes #
- Related to #

## 📋 Checklist
<!-- Mark completed items with an "x" -->

### Code Quality
- [ ] Code follows the project's coding standards
- [ ] Self-review of the code has been performed
- [ ] Code is properly commented, particularly in hard-to-understand areas
- [ ] TypeScript types are properly defined
- [ ] No console.log statements left in production code

### Mobile Development
- [ ] Components are responsive and work on different screen sizes
- [ ] Platform-specific code is properly handled (iOS vs Android)
- [ ] Navigation flows work correctly
- [ ] Performance impact has been considered
- [ ] Memory leaks have been checked for

### Testing & Quality
- [ ] `pnpm run type-check` passes
- [ ] `pnpm run lint` passes
- [ ] `pnpm run format` has been run
- [ ] All existing tests pass
- [ ] New tests have been added for new functionality
- [ ] Test coverage is maintained or improved

### Documentation
- [ ] Documentation has been updated if needed
- [ ] README.md updated if needed
- [ ] CHANGELOG.md updated if needed
- [ ] Comments added for complex logic

### Dependencies
- [ ] No unnecessary dependencies added
- [ ] Dependencies are compatible with Expo SDK version
- [ ] Package.json changes use pnpm (not npm/yarn)
- [ ] Security audit passes (`pnpm audit`)

## 🚀 Deployment Notes
<!-- Any special deployment considerations -->

- [ ] No database migrations required
- [ ] No environment variable changes required
- [ ] No breaking changes for existing users
- [ ] EAS build configuration updated if needed

## 📝 Additional Notes
<!-- Any additional information that reviewers should know -->

## 🔍 Review Focus Areas
<!-- Highlight specific areas where you'd like focused review -->

- [ ] Performance implications
- [ ] Security considerations
- [ ] Mobile UX/UI
- [ ] Code architecture
- [ ] Error handling
- [ ] Accessibility

---

### For Reviewers
<!-- Guidelines for code reviewers -->

Please ensure:
1. ✅ All CI checks pass
2. 📱 Mobile functionality is tested on relevant platforms
3. 🎨 UI/UX follows design guidelines
4. 🔒 Security best practices are followed
5. ⚡ Performance impact is acceptable
6. 📚 Documentation is adequate

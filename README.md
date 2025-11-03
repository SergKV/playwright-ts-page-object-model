# Playwright POM with TS for www.demoblaze.com

This repository showcases the implementation of the Page Object Model (POM) design pattern using Playwright. It provides a solid foundation for creating a scalable and maintainable automated testing framework for web applications with Playwright and TypeScript. The project highlights the use of the POM structure to promote clean and organized code. The application being tested is [BlazeMeter Demo Store](https://www.demoblaze.com), a demo eCommerce website.

## Installation
Before proceeding, ensure that **Node.js** and **npm** are installed on your system.

- **Step 1:** Install required node packages (in Project root folder):
  `npm install`

- **Step 2:** Install the browsers supported by Playwright:
  `npx playwright install`

## Project structure
```bash
tests
├── components
│   ├── forms
│   ├── pages
│   ├── panels
│   └── popups
├── constants
├── login
│   └── data
├── shopping
│   └── data
└── utils
```
In a regular POM project, all website-represented pages are named as pages. In the given project, for simplicity of navigation and ease of use, pages were named as components and further subdivided into items such as form, page, or panel. This approach provides ease of navigation and improves code readability, scalability, and maintainability.

## Execution
- Execute test cases
  ```bash
  npx playwright test
  ```
- Show last generated HTML report (requires at least one test run)
  ```bash
  npx playwright show-report 
  ```
- Execute specific test suite
  ```bash
  npx playwright test specific-suite.spec.ts
  ```
- Execute test cases by tag
  ```bash
  npx playwright test --grep @Tag-Name
  ```
- Execute test cases in headed mode
  ```bash
  npx playwright test --headed
  ```
- Debug test cases in UI mode
  ```bash
  npx playwright test --ui
  ```
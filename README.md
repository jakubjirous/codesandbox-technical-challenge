# CodeSandbox - Technical Challenge

---

## Instructions

CodeSandbox is exploring different ways of innovating in the space of development workflow and integration.

Your requirements are to build a small proof of concept application that shows an overview of the active branches on a GitHub repository.

On the first page, users should input a GitHub repository URL and hit submit.
Then the user is taken to a new page with some basic repository information and the list of active branches that can be moved around on 3 columns. We call this the repository kanban.

By default, branches should be in the first column: `“In Progress”`. Users should be able to move branches to the next column called `“Ready for Review”` and then move them to the final column `“Ready to Merge”`. Because this is a proof of concept, the state of the kanban should only be persisted locally in the browser.

### Additional notes:

- Code should be written with React and TypeScript, but any other technical choice is 100% yours. Feel free to make use of any existing framework/package/library that helps you deliver this faster.
- You can use the GitHub public API which is documented [here](https://docs.github.com/en/rest?apiVersion=2022-11-28).
- Although this is a proof of concept, we expect a nice look and feel as if we wanted to present it in our next board meeting.
- Feel free to use any IDE to develop the project, but please share the final version in CodeSandbox so we can all have a look at it during the next interview.
- [Design concept in Figma](https://www.figma.com/file/2igSAZhrkvnMUbUEgapIv5/Front-end-hiring-process-v2?node-id=26%3A720)

---

## How to run the application

### Development

Start the local development server with `.env.development` config.

```
yarn start
```

### Building the app

Creates a production build of the application inside the `build` directory and takes into effect the `.env.production` config.

```
yarn build
```

---

## Additional commands

### Linter

Run static analysis tool that checks TypeScript code for readability, maintainability and functionality errors:

```
yarn lint
```

### TypeScript CLI

Run TypeScript compiler and performs a type check:

```
yarn tsc
```

### Code Formatter

Run an opinionated code formatter in check mode:

```
yarn prettier:check
```

This will format the entire codebase according to the set rules:

```
yarn prettier:format
```

### Tests

Run all unit tests:

```
yarn test
```

Run all unit test and in the end also generates a coverage report:

```
yarn test:coverage
```

---

## Implementation

### Stack

List of all used libraries/packages in this stack:

- [Create React App](https://create-react-app.dev/)
- [React v18](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [React Router v6](https://reactrouter.com/en/main)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
  - [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)
  - [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter)
- [JEST](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Prettier](https://prettier.io/)
- [TS Lint](https://palantir.github.io/tslint/)
- [Next UI](https://nextui.org/)
  - [CSS Baseline](https://github.com/nextui-org/nextui/blob/eb09f77da4de372ae7e276da663156a4e3cd324b/packages/react/src/css-baseline/css-baseline.tsx)
  - [Default Theme](https://nextui.org/docs/theme/default-theme)
- [Use Dark Mode](https://github.com/donavon/use-dark-mode)
- [React Use](https://github.com/streamich/react-use)

### Future Improvements

Possible future improvements that could be implemented with a larger time budget depending on the final product requirements.

- Support for dragging and dropping branches between columns in kanban board
- The ability to support multiple languages 
- Splitting main logic parts to reusable packages (e.g. `yarn workspaces`, `Nx`)
- Generated code documentation (e.g. `JSDoc`)
- A pre-commit hook for GIT
- Unit test coverage between 90 and 100%
- Automation end-to-end testing (e.g. `Playwright`, `Cypress`)
- Adding quality gate to CI/CD (e.g. `SonarCloud`)
- Offline Mode Support
- `PWA`  

### Live Demo

The result of the technical challenge can be tested live here:

- [Vercel](https://codesandbox-technical-challenge.vercel.app/) 
- [CodeSandbox IDE](https://codesandbox.io/p/github/jakubjirous/codesandbox-technical-challenge/main?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cle209xeo0002fnhw0akp5he8%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522cle209z09001d3b6m4xkw6wgs%2522%253A%257B%2522key%2522%253A%2522cle209z09001d3b6m4xkw6wgs%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%255D%257D%257D%252C%2522currentSpace%2522%253A%2522cle209z09001d3b6m4xkw6wgs%2522%252C%2522spacesOrder%2522%253A%255B%2522cle209z09001d3b6m4xkw6wgs%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D) 

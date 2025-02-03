# inventory-app
A full-stack application to track your inventory

## Getting Started

1. `npm install`
2. `npm run seed`
3. `npm run server-dev`
4. In a seperate terminal, `npm run client-dev`

## Project 1

### Task 1: Review and Analyze the Legacy Codebase
* Assessed the project for code smells and identified areas for improvement.
* Highlighted potential issues such as exposing internal error details, hardcoded paths, mixed concerns, and lack of unit tests.

### Task 2: Implement Improvements or Add a Small Feature
* Refactored the GameService class to improve maintainability.
* Corrected the class name typo from GameSevice to GameService.
* Added comments throughout the GameService.js file to improve readability and maintainability.
* Implemented caching in the getAllGames method to reduce the number of API calls.

### Task 3: Write and Run Unit Tests
* Created unit tests for the GameService class using Jest.
* Added tests for fetching all games and caching the result.
* Added tests for returning cached games if available.
* Added tests for fetching a single game by its ID.
* Added tests for creating a new game.
* Added tests for updating an existing game.
* Added tests for deleting a game by its ID.
* Resolved the regeneratorRuntime is not defined error by configuring Babel and Jest.

### Task 4: Document your Improvements
* Generated commit messages for each significant change.
* Summarized all tasks performed in this thread and included the summary in the project's README.

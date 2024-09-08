# User Management Application 📝

## Project Description

Hi there! 👋 I created this React application to showcase my skills with Redux Toolkit, TypeScript, and implementing data filtering. This application allows you to fetch a list of users from the JSONPlaceholder API and display it in a convenient table with filtering capabilities based on various criteria.

💻 Live demo: https://user-management-nine-self.vercel.app

(!) Free hosting so might take a while to load for first time.

👀 Screenshot:

📸 ↴︎

![Alt Text](./src/screenshots/User%20management.png)

## Functional Requirements

### 1. Fetch Users

- The application fetches user data via a GET request to the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).

### 2. Display Users in a Table

- Users are displayed in a table with columns for: name, username, email, and phone.

### 3. Advanced Filtering

- The application features search input fields to filter by name, username, email, and phone.
- The table results update in real-time as you type into the filter fields.

### 4. State Management

- [Redux Toolkit](https://redux-toolkit.js.org/) is used to manage the application state, including user data and filter states.

### 5. Type Safety

- [TypeScript](https://www.typescriptlang.org/) is used to enforce strict typing and help avoid errors during development.

### 6. Design and Styling

- The application interface is designed to be user-friendly and visually appealing. Styling is done using CSS, with thoughtful design for table elements and filtering.

## Implementation

### Components

- **App.tsx**: The main application component, which includes a header and the `UserTable` component.
- **UserTable.tsx**: Component for displaying the user table and filtering data. Manages local states for filtering and interacts with Redux to fetch data.

### Redux Toolkit

- **userSlice.ts**: Defines the state for users and filters, as well as the logic for data fetching and filtering. Uses `createAsyncThunk` for asynchronous data fetching and `createSlice` for state management.

### Issues and Solutions

#### Issue 1: Filtering Not Working

**Description:**
Filtering was not updating correctly when text was entered in the search fields.

**Solution:**
Updated the filtering logic in `userSlice`. Now using the `Object.keys` function for dynamic filter checking, which allows for correct user filtering based on selected criteria.

#### Issue 2: Typing Errors

**Description:**
Filter and filtering state typing was incorrect, leading to application errors.

**Solution:**
Used `Partial<Record<keyof User, string>>` for filters, which simplified typing and avoided errors when accessing object properties.

## Installation and Running

1. Clone the repository:

   ```bash
   git clone git@github.com:Viktoryia-Vysotskaya/User_management.git


   ```

2. Navigate to the project directory:

   ```bash
   cd User_management

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Start the application:
   ```bash
   npm start
   ```

The application will be available at **http://localhost:3000**.

**Acknowledgements**
Thank you for viewing and your attention! If you have any questions or suggestions, feel free to reach out. 💬

**Created by Viktoryia Vysotskaya**

- ➱ [Email](mailto:radevich.vika2014@gmail.com)
- ➱ [LinkedIn](https://www.linkedin.com/in/viktoryia-vysotskaya)

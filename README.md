# users-app
Application developed using the Vue.js framework with version 3 and TypeScript, allowing you to view a list of users, add, delete, and view the details of each user.

State management is handled using the Pinia library, and components are created using the Element Plus library.

# Answer to question
I would implement a local cache system on the client-side to store the fetched user data, using the localStorage for instance, to store the data. Then, whenever a user accesses the app, I would check if there's cached data available locally before making an API request. If cached data is available, you could use that to populate the interface. 

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# 0x04. Files Manager

## Project Overview
This project is a comprehensive summary of key back-end concepts including authentication, NodeJS, MongoDB, Redis, pagination, and background processing. The objective is to build a simple platform for file management, allowing users to upload and view files. The platform will feature:

- User authentication via tokens
- Listing all files
- Uploading new files
- Changing file permissions
- Viewing files
- Generating thumbnails for images

The implementation is designed to provide flexibility in the choice of techniques and structure, encouraging the use of a `utils` folder for common utilities.

## Collaborators
- **Kay Macharia**
- **Yvonne Gichovi**

## Project Details

- **Back-end**: Node.js, Express.js
- **Languages**: JavaScript (ES6)
- **Databases**: MongoDB, Redis
- **Queue Management**: Kue
- **Duration**: August 1, 2024 - August 8, 2024
- **Manual QA Review**: Required upon completion

## Learning Objectives
By the end of this project, participants should be able to:

1. Create an API using Express.
2. Implement user authentication.
3. Store data in MongoDB.
4. Store temporary data in Redis.
5. Set up and utilize a background worker.

## Requirements
- Editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using Node.js version 12.x.x
- All files should end with a new line.
- A `README.md` file is mandatory.
- JavaScript files should have a `.js` extension.
- Code must adhere to ESLint standards.

## Provided Files
- `package.json`
- `.eslintrc.js`
- `babel.config.js`

Make sure to run `$ npm install` to install dependencies.

## Tasks

### 1. Redis Utils
Create a `RedisClient` class in `utils/redis.js` with methods to interact with Redis.

### 2. MongoDB Utils
Create a `DBClient` class in `utils/db.js` to manage MongoDB operations.

### 3. First API
Set up an Express server in `server.js` with routes defined in `routes/index.js`. Implement two endpoints in `AppController.js`:

- `GET /status`: Checks if Redis and MongoDB are alive.
- `GET /stats`: Returns the count of users and files.

### 4. Create a New User
In `routes/index.js`, add a `POST /users` endpoint managed by `UsersController.postNew` for user registration.

### 5. Authenticate a User
In `routes/index.js`, add endpoints for user authentication and management in `AuthController.js`:

- `GET /connect`: Generates an authentication token.
- `GET /disconnect`: Signs out the user.
- `GET /users/me`: Retrieves the authenticated user's information.

### 6. First File
In `routes/index.js`, add a `POST /files` endpoint managed by `FilesController.postUpload` for file uploads.

## Resources
- Node JS getting started
- Process API doc
- Express getting started
- Mocha documentation
- Nodemon documentation
- MongoDB
- Bull
- Image thumbnail
- Mime-Types
- Redis

## Notes
- For authentication, use Basic Auth with `Authorization` header in the format `Basic Base64(<email>:<password>)`.
- Store user passwords securely using SHA1 hashing.
- Use UUIDs for unique identifiers where necessary.
- Store files locally in the specified directory or `/tmp/files_manager` by default.

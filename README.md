# MERN Stack Application
This is a MERN (MongoDB, Express.js, React.js, Node.js) stack application with user JWT authentication. The backend is deployed on Render and the client side is deployed on Vercel.

## Overview
This application provides a platform where users can perform CRUD (Create, Read, Update, Delete) operations on notes. Users can sign up, log in, create, edit, and delete notes. The backend is built with Node.js and Express.js, while the frontend is built with React.js.

## Backend
The backend is responsible for handling API requests, user authentication, and interacting with the database. It is deployed on Render and utilizes the following packages:

1. `Express.js`: Provides a robust framework for building RESTful APIs.
2. `Node.js`: A JavaScript runtime for building scalable network applications.
3. `Mongoose`: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a straightforward schema-based solution to model application data.
4. `bcrypt`: Used for hashing passwords before storing them in the database to enhance security.
5. `dotenv`: Loads environment variables from a .env file into process.env.
6. `cors`: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js, allowing requests from the client-side application.

`Backend URL`: (https://mern-server-h65f.onrender.com)
`GitHub Repository`: (https://github.com/avinash-123-del/MERN_server.git)

## Frontend
The frontend is responsible for providing a user-friendly interface for interacting with the application. It is deployed on Vercel and utilizes the following packages:

1. `React`: A JavaScript library for building user interfaces.
2. `React` Router Dom: Provides routing capabilities for single-page applications in React.
3. `Axios`: A promise-based HTTP client for making requests to the backend API.
4. `React` Icons: Provides a set of icons for use in React applications.

 `Client-side URL`: (https://mern-client-ivory.vercel.app/)
 `GitHub Repository`: (https://github.com/avinash-123-del/MERN_client.git)

## Usage
1. Visit the client-side URL to access the application.
2. Sign up for a new account or log in with existing credentials.
Create, edit, or delete notes as needed.
3. Log out when finished using the application.
Development
4. To set up the development environment locally:

## Clone this repository.
1. Navigate to the backend directory and run npm install to install backend dependencies.
2. Create a .env file in the backend directory and configure environment variables.
3. Run npm start to start the backend server.
4. Navigate to the frontend directory and run npm install to install frontend dependencies.
5. Update the API base URL in the frontend code to point to your locally running backend server.
6. Run npm start to start the frontend development server.



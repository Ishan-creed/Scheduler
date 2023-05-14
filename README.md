# Scheduler

Time Table Fetcher is a web application that allows users to access their daily schedules. It is built using Node.js as the backend and EJS as the frontend, with authentication being provided by MongoDB. The main objective of this project is to provide users with a simple and user-friendly interface that allows them to access their schedules with ease.

## Features

- User Authentication: The application allows users to register, login and logout securely using MongoDB as the database for storing user data.
- Schedule Management: The application provides users with the ability to view their daily schedules. The schedules are fetched from the backend and displayed on the frontend using EJS templates.
- User-friendly Interface: The application has a simple and easy-to-use interface that allows users to navigate through the application with ease.
- Mobile-responsive: The application is designed to be mobile-responsive, which means that users can access their schedules on their mobile devices.

## Installation

1. Clone the repository: `git clone https://github.com/username/time-table-fetcher.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file and add the following variables:
   - `PORT`: the port on which the application will run
   - `MONGO_URI`: the URI of the MongoDB database
   - `SESSION_SECRET`: a secret string used to sign the session ID
4. Start the application: `npm start`

## Technologies Used

- Node.js
- Express.js
- EJS
- MongoDB
- Mongoose
- Passport.js

## Deployment

The application can be deployed on a cloud hosting platform, such as Heroku. The code can be pushed to a Git repository, and the hosting platform will pull the latest code from the repository and deploy it to the server.

